import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const ambulanceStaffResource = (ambulanceStaff) => {
  return {
    id: ambulanceStaff.id,
    name: ambulanceStaff.name,
    email: ambulanceStaff.email,
    phone: ambulanceStaff.phone,
    createdAt: dayjs(ambulanceStaff.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(ambulanceStaff.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
