import { NextFunction, Request, Response } from "express";
import prisma from "../config/db";

export const addGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const genre = await prisma.genres.create({
      data: req.body,
    });
    return res.status(200).json(genre);
  } catch (error) {
    next(error);
  }
};
export const getGenreById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const genre = await prisma.genres.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(genre);
  } catch (error) {
    next(error);
  }
};
export const getGenres = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = +(req.query.page || 0);
    const limit = +(req.query.limit || 2);

    const genres = await prisma.genres.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(genres);
  } catch (error) {
    next(error);
  }
};
export const updateGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedGenre = await prisma.genres.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.status(200).json(updatedGenre);
  } catch (error) {
    next(error);
  }
};
export const deleteGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.genres.delete({ where: { id: req.params.id } });
    return res.json({ deleted: true });
  } catch (error) {
    next(error);
  }
};
