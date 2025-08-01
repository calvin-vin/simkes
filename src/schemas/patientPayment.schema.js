import { z } from "zod";

export const patientPaymentSchema = z.object({
  paymentMethodId: z.string().uuid(),
  participantId: z.string().min(1, "Participant ID is required"),
});

export const updatePatientPaymentSchema = z.object({
  paymentMethodId: z.string().uuid().optional(),
  participantId: z.string().optional(),
});

export const getAllPatientPaymentSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});
