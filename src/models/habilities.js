import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Habilities = sequelize.define("habilities", {
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
});
