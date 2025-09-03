import { z } from "zod";

export const hospitalLocationSchema = z.object({
  name: z.string().min(1, "Nama rumah sakit wajib diisi"),
  latitude: z.number().or(
    z
      .string()
      .regex(/^-?\d+(\.\d+)?$/)
      .transform(Number)
  ),
  longitude: z.number().or(
    z
      .string()
      .regex(/^-?\d+(\.\d+)?$/)
      .transform(Number)
  ),
  address: z.string().min(1, "Alamat rumah sakit wajib diisi"),
  isActive: z.boolean().optional().default(true),
});
