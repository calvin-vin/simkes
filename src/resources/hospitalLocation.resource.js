import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const hospitalLocationResource = (hospitalLocation) => {
  return {
    id: hospitalLocation.id,
    name: hospitalLocation.name,
    latitude: hospitalLocation.latitude,
    longitude: hospitalLocation.longitude,
    address: hospitalLocation.address,
    isActive: hospitalLocation.isActive,
    createdAt: dayjs(new Date()).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(new Date()).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss"),
  };
};
