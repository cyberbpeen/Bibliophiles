import { NextFunction, Request, Response } from "express";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/authentication";
import prisma from "../config/db";
import { AuthenticationError, NotFoundError } from "../utils/customError";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    await prisma.user.create({
      data: {
        name,
        email,
        password: await hashPassword(password),
      },
    });
    return res.status(201).json({ success: true, user: "user" });
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) throw new NotFoundError("User not Found");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new AuthenticationError("Invalid Password");
    }

    const token = generateToken(user);

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = res.locals.user;
    const user = await prisma.user.findFirstOrThrow({
      where: { id },
    });

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
