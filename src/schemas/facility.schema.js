import { z } from "zod";

/**
 * Schema validasi untuk fasilitas rumah sakit
 */
export const facilitySchema = z.object({
  name: z.string().min(1, "Nama fasilitas wajib diisi"),
  description: z.string().optional(),
  status: z.boolean().default(true),
});

/**
 * Schema validasi untuk filter fasilitas
 */
export const facilityFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  status: z.enum(["true", "false"]).optional(),
  sortBy: z.enum(["name", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});