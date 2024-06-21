import { z } from 'zod';

export const billingSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  company: z.string().optional(),
  zip: z.string().min(1, { message: "ZIP code is required" }),
  country: z.string().min(1, { message: "Country / Region is required" }),
  street: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "Town / City is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  add: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  additionalInfo: z.string().optional(),
  paymentMethod: z.enum(['Direct Bank Transfer', 'Cash On Delivery'], { message: "Payment method is required" })
});

export type BillingData = z.infer<typeof billingSchema>;
