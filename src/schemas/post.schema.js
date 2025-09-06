import { z } from "zod";

/**
 * Schema validasi untuk postingan
 */
export const postSchema = z.object({
  title: z.string().min(1, "Judul postingan wajib diisi"),
  content: z.string().min(1, "Konten postingan wajib diisi"),
  isActive: z.enum(["true", "false"]).default("true"),
});

/**
 * Schema validasi untuk filter postingan
 */
export const postFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  isActive: z.enum(["true", "false"]).optional(),
  sortBy: z.enum(["title", "createdAt"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});
