import { Users } from "../models/users.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, resp) => {
  const { name, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        name,
      },
    });

    if (user === null) return resp.status(404).json("credenciales invalidas");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return resp.status(404).json("credenciales invalidas");

    const token = generateToken(user.dataValues);

    resp.status(200).json({
      Ok: true,
      message: "token generated successfully",
      token: token,
    });
  } catch (error) {
    return resp.status(500).json({
      Ok: false,
      message: error.message,
    });
  }
};

// export const createUser = async (req, resp) => {
//   const { name, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = {
//     name,
//     password: hashedPassword,
//   };

//   try {
//     const createNewUser = await Users.create(newUser);
//     resp.status(200).json(createNewUser);
//   } catch (error) {
//     return resp.status(500).json({ message: error.message });
//   }
// };
