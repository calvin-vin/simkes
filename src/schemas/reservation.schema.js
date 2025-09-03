import { z } from "zod";

export const reservationSchema = z.object({
  unitId: z.number().int().positive(),
  doctorId: z.number().int().positive().optional(),
  paymentMethodId: z.number().int().positive(),
  reservationDate: z.string(),
  identity: z.number().int().positive().optional(),
  referralNumber: z.string().optional(),
  bpjsNumber: z.string().optional(),
  otherInsuranceNumber: z.string().optional(),
  referralSourceId: z.number().int().positive().optional(),
  notes: z.string().optional(),
});

export const cancelReservationSchema = z.object({
  cancelReason: z.string().min(1, "Alasan pembatalan harus diisi"),
});

export const reservationFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  doctorId: z.coerce.number().int().positive().optional(),
  unitId: z.coerce.number().int().positive().optional(),
  date: z.string().optional(),
  isCancelled: z.enum(["true", "false"]).optional(),
  sortBy: z
    .enum(["reservationDate", "createdAt", "queueNumber", "reservationNumber"])
    .optional()
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export const checkinSchema = z.object({
  latitude: z.number().or(
    z
      .string()
      .regex(/^-?\d+(\.\d+)?$/)
      .transform(Number)
  ),
  longitude: z.number().or(
    z
      .string()
      .regex(/^-?\d+(\.\d+)?$/)
      .transform(Number)
  ),
});
