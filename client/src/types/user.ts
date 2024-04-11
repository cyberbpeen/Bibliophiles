import { z } from "zod";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

export type LoginFormFields = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: "Name is required." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});

export type RegisterFormFields = z.infer<typeof RegisterSchema>;
