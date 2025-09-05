import { z } from "zod";

export const getAllDoctorScheduleSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  doctorName: z.string().optional(),
  unitId: z.coerce.number().optional(),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Date must be in format yyyy-mm-dd",
    })
    .optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  minRating: z.coerce.number().min(0).max(5).optional(),
  maxRating: z.coerce.number().min(0).max(5).optional(),
});
