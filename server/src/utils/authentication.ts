import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { User } from "../models/user";

let JWT_SECRET_KEY: Secret =
  (process.env.JWT_SECRET_KEY as Secret) || "SecretKey";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: User): string => {
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

export const validateToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};
