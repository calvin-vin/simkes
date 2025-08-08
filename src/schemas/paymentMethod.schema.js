import { z } from "zod";

export const paymentMethodSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export const getAllPaymentMethodSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});
