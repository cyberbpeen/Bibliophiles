import { Request, Response, NextFunction } from "express";
import prisma from "../config/db";
import { NotFoundError } from "../utils/customError";

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await prisma.books.create({
      data: req.body,
    });
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await prisma.books.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!book) throw new NotFoundError("No Book Found");
    return res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = +(req.query.page || 0);
    const limit = +(req.query.limit || 2);

    const books = await prisma.books.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedbook = await prisma.books.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.status(200).json(updatedbook);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.books.delete({ where: { id: req.params.id } });
    return res.json({ deleted: true });
  } catch (error) {
    next(error);
  }
};
