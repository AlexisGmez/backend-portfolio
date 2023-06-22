import dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";
const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});
