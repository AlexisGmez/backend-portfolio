import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  const port = process.env.PORT;
  try {
    await sequelize.sync({ force: false });
    app.listen(port, async () => {
      console.log("listen on port " + port);
    });
  } catch (error) {
    console.log("fallo de conexion", error);
  }
};

main();
