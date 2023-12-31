import dotenv from "dotenv";
dotenv.config();
import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import habilitiesRoutes from "./routes/habilities.routes.js";
import loginRoutes from "./routes/login.routes.js";

import { cloudinaryConfig } from "./utils/cloudinaryUploadImage.js";

const app = express();
cloudinaryConfig();

//middleware
app.use(express.json());

//routes
app.use(projectsRoutes);
app.use(habilitiesRoutes);
app.use(loginRoutes);
app.get("/", (req, res) => {
  res.status(200).json("welcome to my porfolio");
});

export default app;
