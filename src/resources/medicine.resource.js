import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const medicineResource = (medicine) => {
  return {
    id: medicine.id,
    namaproduk: medicine.namaproduk,
    stok: medicine.totalQuantity ?? 0,
    kadaluarsaterdekat: medicine.nearestExpired
      ? dayjs(medicine.nearestExpired).tz(TIMEZONE).format("YYYY-MM-DD")
      : null,
    detailstok: medicine.stokDetails.map((s) => ({
      qtyproduk: s.qtyproduk,
      tglkadaluarsa: s.tglkadaluarsa
        ? dayjs(s.tglkadaluarsa).tz(TIMEZONE).format("YYYY-MM-DD")
        : null,
      idruangan: s.ruangan?.id,
      namaruangan: s.ruangan?.namaruangan,
    })),
  };
};

export const medicineCollection = (medicines) => {
  return medicines.map((p) => medicineResource(p));
};
