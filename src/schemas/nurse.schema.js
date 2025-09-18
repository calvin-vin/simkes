import { z } from "zod";

export const getAllNurseSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  speciality: z.string().optional(),
  isActive: z.enum(["true", "false"]).optional(),
  sortBy: z
    .enum(["name", "speciality", "createdAt"])
    .optional()
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
  minRating: z.coerce.number().min(0).max(5).optional(),
  maxRating: z.coerce.number().min(0).max(5).optional(),
});

export const getNurseByIdSchema = z.object({
  id: z.string().uuid(),
});

export const createNurseSchema = z.object({
  name: z.string().min(1, "Nama perawat wajib diisi"),
  speciality: z.string().optional(),
  description: z.string().optional(),
  isActive: z.enum(["true", "false"]).default("true"),
});

export const updateNurseSchema = z.object({
  name: z.string().min(1, "Nama perawat wajib diisi").optional(),
  speciality: z.string().optional(),
  description: z.string().optional(),
  isActive: z.enum(["true", "false"]).optional(),
});
