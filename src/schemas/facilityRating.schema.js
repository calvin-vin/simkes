import { z } from "zod";

/**
 * Schema validasi untuk penilaian fasilitas
 */
export const facilityRatingSchema = z.object({
  reservationId: z.string(),
  facilityId: z.string(),
  rating: z
    .number()
    .int()
    .min(1, "Rating minimal 1")
    .max(5, "Rating maksimal 5"),
  comment: z.string().optional(),
});

/**
 * Schema validasi untuk filter penilaian fasilitas
 */
export const facilityRatingFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  facilityId: z.string().optional(),
  rating: z.coerce.number().int().min(1).max(5).optional(),
  sortBy: z.enum(["rating", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});