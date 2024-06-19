import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginData = z.infer<typeof LoginSchema>;
