import { z } from "zod";

export const createReservationSchema = z.object({
  medicalCategoryId: z.string().uuid(),
  doctorId: z.string().uuid(),
  reservationDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid reservation date format"),
});
