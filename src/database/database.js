import Sequelize from "sequelize";

export const sequelize = new Sequelize("portfolio", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
