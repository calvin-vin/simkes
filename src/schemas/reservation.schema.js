import { z } from "zod";

export const reservationStatsSchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: "Format tanggal harus YYYY-MM-DD",
    })
    .optional()
    .refine((date) => !date || !isNaN(new Date(date).getTime()), {
      message: "Tanggal tidak valid",
    }),
  endDate: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: "Format tanggal harus YYYY-MM-DD",
    })
    .optional()
    .refine((date) => !date || !isNaN(new Date(date).getTime()), {
      message: "Tanggal tidak valid",
    }),
  unitId: z.coerce.number().int().positive().optional(),
});

export const reservationSchema = z.object({
  unitId: z.number().int().positive(),
  doctorId: z.number().int().positive(),
  paymentMethodId: z.number().int(),
  reservationDate: z.string(),
  referralNumber: z.string().optional(),
  bpjsNumber: z.string().optional(),
  otherInsuranceNumber: z.string().optional(),
  referralSourceId: z.number().int().positive().optional(),
});

export const cancelReservationSchema = z.object({
  cancelReason: z.string().min(1, "Alasan pembatalan harus diisi"),
});

export const reservationFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  doctorId: z.coerce.number().int().positive().optional(),
  unitId: z.coerce.number().int().positive().optional(),
  startDate: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: "Format tanggal harus YYYY-MM-DD",
    })
    .optional()
    .refine((date) => !date || !isNaN(new Date(date).getTime()), {
      message: "Tanggal tidak valid",
    }),
  endDate: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: "Format tanggal harus YYYY-MM-DD",
    })
    .optional()
    .refine((date) => !date || !isNaN(new Date(date).getTime()), {
      message: "Tanggal tidak valid",
    }),
  isCancelled: z.enum(["true", "false"]).optional(),
  isConfirmed: z.enum(["true", "false"]).optional(),
  callStatus: z.enum(["0", "1", "2"]).optional(),
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
