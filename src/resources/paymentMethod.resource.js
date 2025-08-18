import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const paymentMethodResource = (paymentMethod) => {
  return {
    id: paymentMethod.id,
    statusenabled: paymentMethod.statusenabled,
    reportdisplay: paymentMethod.reportdisplay,
  };
};
