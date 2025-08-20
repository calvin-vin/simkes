import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const medicineResource = (medicine) => {
  return {
    id: medicine.id,
    productName: medicine.productName,
    stock: medicine.totalQuantity ?? 0,
    nearestExpired: medicine.nearestExpired
      ? dayjs(medicine.nearestExpired).tz(TIMEZONE).format("YYYY-MM-DD")
      : null,
    stockDetails: Array.isArray(medicine.stockDetails)
      ? medicine.stockDetails.map((s) => ({
          quantity: s.quantity,
          expiredAt: s.expiredAt
            ? dayjs(s.expiredAt).tz(TIMEZONE).format("YYYY-MM-DD")
            : null,
          unitId: s.unit?.id ?? null,
          unitName: s.unit?.unitName ?? null,
        }))
      : [],
  };
};

export const medicineCollection = (medicines = []) => {
  return medicines.map((medicine) => medicineResource(medicine));
};
