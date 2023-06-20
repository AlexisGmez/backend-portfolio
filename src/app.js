import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import habilitiesRoutes from "./routes/habilities.routes.js";
import loginRoutes from "./routes/login.routes.js";

import dotenv from "dotenv";
import { cloudinaryConfig } from "./utils/cloudinaryUploadImage.js";

dotenv.config();
const app = express();
cloudinaryConfig();

//middleware
app.use(express.json());

//routes
app.use(projectsRoutes);
app.use(habilitiesRoutes);
app.use(loginRoutes);

export default app;
