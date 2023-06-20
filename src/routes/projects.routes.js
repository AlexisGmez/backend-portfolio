import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/projects.controllers.js";
import { multerUpload } from "../utils/multer.js";

const upload = multerUpload();
const router = Router();

router.get("/api/v1/projects", getProjects);
router.post("/api/v1/projects", upload.single("myFile"), createProject);
router.put("/api/v1/projects/:id", updateProject);
router.delete("/api/v1/projects/:id", deleteProject);
router.get("/api/v1/projects/:id", getProjectById);

export default router;
