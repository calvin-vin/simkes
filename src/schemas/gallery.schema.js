import { z } from "zod";

/**
 * Schema validasi untuk gallery
 */
export const gallerySchema = z.object({
  title: z.string().min(1, "Judul gallery wajib diisi"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

/**
 * Schema validasi untuk filter gallery
 */
export const galleryFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  isActive: z.enum(["true", "false"]).optional(),
  sortBy: z.enum(["title", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});
