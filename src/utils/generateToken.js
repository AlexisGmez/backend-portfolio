import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const modificatedObj = {
    name: payload.name,
    createdAt: payload.createdAt,
    updatedAt: payload.updatedAt,
  };

  const secretKey = process.env.SECRET_TOKEN_KEY;
  return jwt.sign(modificatedObj, secretKey);
};
