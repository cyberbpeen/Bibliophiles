import { z } from "zod";

export type Genre = {
  id: string;
  title: string;
  descriptions: string;
};

export const GenreSchema = z.object({
  title: z.string().min(3, { message: "Title is Required" }),
  descriptions: z.string().optional(),
});

export type GenreFields = z.infer<typeof GenreSchema>;
