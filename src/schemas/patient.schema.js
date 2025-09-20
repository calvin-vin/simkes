import { z } from "zod";

export const patientFilterSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  sortBy: z
    .enum(["name", "identity", "registeredAt"])
    .optional()
    .default("registeredAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export const updatePatientSchema = z.object({
  name: z.string().optional(),
  genderId: z.number().int().optional(),
  birthPlace: z.string().optional(),
  birthDate: z
    .string()
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: "Format tanggal harus YYYY-MM-DD",
    })
    .optional()
    .refine((date) => !date || !isNaN(new Date(date).getTime()), {
      message: "Tanggal tidak valid",
    }), // Will be converted to DateTime in service
  motherName: z.string().optional(),
  fatherName: z.string().optional(),
  spouseName: z.string().optional(),
  bpjsNumber: z.string().optional(),
  otherInsuranceNumber: z.string().optional(),
  phoneNumber: z.string().optional(),
  homeAddress: z.string().optional(),
});
