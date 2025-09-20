import { z } from "zod";

export const getEmergencyStatsSchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in format yyyy-mm-dd")
    .optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in format yyyy-mm-dd")
    .optional(),
  groupBy: z
    .enum(["day", "week", "month"], {
      errorMap: () => ({ message: "groupBy must be one of: day, week, month" }),
    })
    .optional()
    .default("day"),
});

const locationSchema = z
  .array(z.number())
  .min(2, { message: "Must be an array of latitude and longitude" })
  .max(2, { message: "Must be an array of latitude and longitude" })
  .refine(
    ([lat, lon]) => lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180,
    {
      message:
        "Latitude must be between -90 and 90, and longitude must be between -180 and 180",
    }
  );

export const emergencySchema = z.object({
  location: locationSchema,
  note: z.string().optional(),
});

export const updateStatusEmergencySchema = z.object({
  status: z.enum([
    "ON_THE_WAY",
    "ARRIVED",
    "PATIENT_IN_CAR",
    "TO_HOSPITAL",
    "COMPLETED",
  ]),
  location: locationSchema,
  note: z.string().optional(),
});
