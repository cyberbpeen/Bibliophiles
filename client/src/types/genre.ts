import { z } from "zod";

export type Genre = {
  id: string;
  title: string;
  descriptions: string;
};

export type GenreRequest = {
  title: string;
  descriptions: string;
};

export const GenreSchema = z.object({
  title: z.string().min(3, { message: "Title is empty" }),
  descriptions: z.string().optional(),
});

export type GenreFormFields = z.infer<typeof GenreSchema>;
