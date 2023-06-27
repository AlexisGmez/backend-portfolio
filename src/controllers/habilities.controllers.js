import { Habilities } from "../models/habilities.js";
import { v4 as uuidv4 } from "uuid";
import { cloudinaryUploadImage } from "../utils/cloudinaryUploadImage.js";

export const getHabilities = async (req, res) => {
  try {
    const habilities = await Habilities.findAll();
    res.status(200).json({
      Ok: true,
      message: "list of habilities",
      habilities: habilities,
    });
  } catch (error) {
    return res.status(500).json({
      Ok: false,
      message: error.message,
    });
  }
};

export const createHability = async (req, res) => {
  const img = req.file.path;

  try {
    const cloudinaryUploadResponse = await cloudinaryUploadImage(
      img,
      "portfolio habilities"
    );

    const habilityObj = {
      id: uuidv4(),
      name: req.body.name,
      image: cloudinaryUploadResponse.secure_url,
      image_id: cloudinaryUploadResponse.public_id,
    };

    const hability = await Habilities.create(habilityObj);
    res.status(201).json({
      Ok: true,
      message: "hability created successfully",
      hability_created: hability,
    });
  } catch (error) {
    return res.status(500).json({
      Ok: false,
      message: error.message,
    });
  }
};

export const updateHability = async (req, res) => {
  const { id } = req.params;
  try {
    const hability = await Habilities.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );
    if (hability[0] === 0)
      return res.status(404).json({
        Ok: false,
        message: "habilidad no encontrada",
      });

    res.status(201).json({
      Ok: true,
      message: "actualizado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      Ok: false,
      message: error.message,
    });
  }
};

export const deleteHability = async (req, res) => {
  const { id } = req.params;
  try {
    const hability = await Habilities.destroy({
      where: {
        id,
      },
    });
    if (hability !== 1)
      return res.status(404).json({
        Ok: false,
        message: "no se encontro la habilidad a eliminar",
      });
    res.status(200).json({
      Ok: true,
      message: "Habilidad eliminada correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      Ok: true,
      message: error.message,
    });
  }
};
