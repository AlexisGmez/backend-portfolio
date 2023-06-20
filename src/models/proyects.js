import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Habilities } from "./habilities.js";

export const Projects = sequelize.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Projects.belongsToMany(Habilities, { through: "ProjectHability" });
Habilities.belongsToMany(Projects, { through: "ProjectHability" });
