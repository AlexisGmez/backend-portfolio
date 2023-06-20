import { Router } from "express";
import {
  createHability,
  deleteHability,
  getHabilities,
  updateHability,
} from "../controllers/habilities.controllers.js";
import { multerUpload } from "../utils/multer.js";

const upload = multerUpload();
const router = Router();

router.get("/api/v1/habilities", getHabilities);
router.post("/api/v1/habilities", upload.single("myFile"), createHability);
router.patch("/api/v1/habilities/:id", updateHability);
router.delete("/api/v1/habilities/:id", deleteHability);
router.get("/api/v1/habilities/:id");

export default router;
