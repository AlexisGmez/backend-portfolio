import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  try {
    await sequelize.sync({ force: false });

    app.listen(4000);
    console.log("listen on port 4000");
  } catch (error) {
    console.log("fallo de conexion", error);
  }
};
main();
