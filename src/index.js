import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    const port = process.env.PORT;
    app.listen(port);
    console.log("listen on port " + port);
  } catch (error) {
    console.log("fallo de conexion", error);
  }
};
main();
