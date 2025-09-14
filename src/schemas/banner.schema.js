import { z } from "zod";

/**
 * Schema validasi untuk banner
 */
export const bannerSchema = z.object({
  title: z.string().min(1, "Judul banner harus diisi"),
  description: z.string().optional(),
  order: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : undefined)),
  isActive: z
    .enum(["true", "false"])
    .default("true")
    .transform((val) => val === "true"),
});

/**
 * Schema validasi untuk update banner
 */
export const updateBannerSchema = z.object({
  title: z.string().min(1, "Judul banner harus diisi").optional(),
  description: z.string().optional(),
  order: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : undefined)),
  isActive: z
    .enum(["true", "false"])
    .optional()
    .transform((val) => val === "true"),
});

/**
 * Schema validasi untuk filter banner
 */
export const bannerFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  isActive: z.enum(["true", "false"]).optional(),
  sortBy: z.enum(["order", "createdAt"]).optional().default("order"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("asc"),
});

/**
 * Schema validasi untuk update urutan banner
 */
export const updateBannerOrderSchema = z.object({
  bannerOrders: z.array(
    z.object({
      id: z.string(),
      order: z
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => val >= 0, {
          message: "Order harus berupa angka positif",
        }),
    })
  ),
});
