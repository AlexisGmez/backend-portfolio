import { Projects } from "../models/proyects.js";
import { v4 as uuidv4 } from "uuid";
import { cloudinaryUploadImage } from "../utils/cloudinaryUploadImage.js";
import { Habilities } from "../models/habilities.js";

export const getProjects = async (req, res) => {
  try {
    const data = await Projects.findAll({
      include: [
        {
          model: Habilities,
          attributes: ["name", "image"],
          through: { attributes: [] },
        },
      ],
    });
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findByPk(id);
    if (project === null) return res.sendStatus(404);
    res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, description, habilities } = req.body;
  const img = req.file.path;

  try {
    const cloudinaryUploadResponse = await cloudinaryUploadImage(
      img,
      "portfolio projects"
    );

    const projectObj = {
      id: uuidv4(),
      name: name,
      image: cloudinaryUploadResponse.secure_url,
      image_id: cloudinaryUploadResponse.public_id,
      description: description,
    };
    const newProject = await Projects.create(projectObj);

    if (!Array.isArray(habilities)) {
      const habilidadesExist = await Habilities.findByPk(habilities);
      await newProject.addHabilities(habilidadesExist);
      return res.json(newProject);
    }

    const habilidadesExist = await Promise.all(
      habilities.map(async (hability) => await Habilities.findByPk(hability))
    );

    await newProject.addHabilities(habilidadesExist);
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  try {
    const project = await Projects.findByPk(id);

    project.name = name;
    project.image = image;
    project.description = description;

    await project.save();
    res.json(project);
  } catch (error) {
    return req.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Projects.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
