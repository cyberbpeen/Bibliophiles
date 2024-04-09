import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { HttpStatusCode } from "../models/httpStatusCode";
import CustomError from "../utils/customError";
export const ErrorHandler: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ message: err.message });
  else {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER)
      .json({ message: err.message });
  }
};
