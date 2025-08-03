import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const medicalCategoryResource = (medicalCategory) => {
  return {
    id: medicalCategory.id,
    simrsId: medicalCategory.simrsId,
    name: medicalCategory.name,
    createdAt: dayjs(medicalCategory.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(medicalCategory.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    syncedAt: dayjs(medicalCategory.syncedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
