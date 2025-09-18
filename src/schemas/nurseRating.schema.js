import { z } from "zod";

export const getAllNurseRatingSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  nurseId: z.string().uuid("ID perawat tidak valid").optional(),
  patientId: z.string().optional(),
  minRating: z.coerce.number().min(1).max(5).optional(),
  maxRating: z.coerce.number().min(1).max(5).optional(),
  sortBy: z.enum(["rating", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export const getNurseRatingByIdSchema = z.object({
  id: z.string().uuid(),
});

export const createNurseRatingSchema = z.object({
  reservationId: z.string(),
  nurseId: z.string().uuid("ID perawat tidak valid"),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});
