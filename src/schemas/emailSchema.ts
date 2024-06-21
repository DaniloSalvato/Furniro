import * as z from "zod";

export const EmailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type emailData = z.infer<typeof EmailSchema>;