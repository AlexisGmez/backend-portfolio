import { Router } from "express";
import { login } from "../controllers/login.controllers.js";

const router = Router();

router.post("/api/v1/login", login);
// router.post("/api/v1/user", createUser);

export default router;
