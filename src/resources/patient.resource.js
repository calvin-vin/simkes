import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const patientResource = (patient) => {
  return {
    id: patient.id,
    name: patient.name,
    simRsId: patient.simRsId ? patient.simRsId : null,
    nik: patient.nik,
    phone: patient.phone,
    createdAt: dayjs(patient.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(patient.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
