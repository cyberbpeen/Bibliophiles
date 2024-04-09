import { NextFunction, Request, Response } from "express";
import { validateToken } from "../utils/authentication";
import { AuthenticationError } from "../utils/customError";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers.authorization;

    if (!bearer) throw new AuthenticationError("No Token");

    const token: string = bearer.split(" ")[1];

    if (!token) throw new AuthenticationError("Valid Token Required");

    const user = validateToken(token);
    res.locals.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

export default isAuthenticated;
