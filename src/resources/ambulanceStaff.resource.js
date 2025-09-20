import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const ambulanceStaffResource = (ambulanceStaff) => {
  return {
    identity: ambulanceStaff.identity,
    name: ambulanceStaff.name,
    email: ambulanceStaff.email,
    phone: ambulanceStaff.phone,
    photo: ambulanceStaff.photo,
    createdAt: dayjs(ambulanceStaff.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(ambulanceStaff.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
