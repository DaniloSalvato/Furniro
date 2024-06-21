import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "The password needs minimum 6 characters "),
});

export type LoginData = z.infer<typeof LoginSchema>;
