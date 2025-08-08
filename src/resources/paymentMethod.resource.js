import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const paymentMethodResource = (paymentMethod) => {
  return {
    id: paymentMethod.id,
    name: paymentMethod.name,
    createdAt: dayjs(paymentMethod.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(paymentMethod.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
