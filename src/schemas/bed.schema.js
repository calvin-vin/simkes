import { z } from "zod";

export const getKetersediaanTempatTidurSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  namaruangan: z.string().optional(),
  idkelas: z.coerce.number().optional(),
  idruangan: z.coerce.number().optional(),
  idkamar: z.coerce.number().optional(),
  idstatusbed: z.coerce.number().min(1).max(100).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export const getSummaryKetersediaanTempatTidurSchema = z.object({
  namaruangan: z.string().optional(),
  idruangan: z.coerce.number().optional(),
  idkelas: z.coerce.number().optional(),
  idstatusbed: z.coerce.number().optional(),
});

export const getAllStatusBedSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  statusbed: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export const getAllKelasSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  namakelas: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export const getAllKamarSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  namakamar: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export const getAllRuanganSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  namaruangan: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});
