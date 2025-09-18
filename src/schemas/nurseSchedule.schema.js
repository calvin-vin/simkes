import { z } from "zod";

export const getAllNurseScheduleSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  nurseName: z.string().optional(),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Date must be in format yyyy-mm-dd",
    })
    .optional(),
  isActive: z.enum(["true", "false"]).optional(),
  sortBy: z.enum(["dayOfWeek", "startTime", "endTime"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  minRating: z.coerce.number().min(0).max(5).optional(),
  maxRating: z.coerce.number().min(0).max(5).optional(),
});

export const getNurseScheduleByIdSchema = z.object({
  id: z.string().uuid(),
});

export const createNurseScheduleSchema = z.object({
  nurseId: z.string().uuid("ID perawat tidak valid"),
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Format waktu harus HH:mm",
  }),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Format waktu harus HH:mm",
  }),
  isActive: z.boolean().default(true),
});

export const updateNurseScheduleSchema = z.object({
  dayOfWeek: z.number().min(0).max(6).optional(),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Format waktu harus HH:mm",
    })
    .optional(),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Format waktu harus HH:mm",
    })
    .optional(),
  isActive: z.boolean().optional(),
});
