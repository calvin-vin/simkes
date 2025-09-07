import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const emergencyResource = (emergency, showHistories = false) => {
  return {
    id: emergency.id,
    patient: emergency.patient
      ? {
          identity: emergency.patient.identity,
          name: emergency.patient.name,
          phoneNumber: emergency.patient.phoneNumber,
        }
      : null,
    location: emergency.location,
    note: emergency.note,
    status: emergency.status,
    assignedTo: emergency.assignedTo
      ? {
          id: emergency.assignedTo.id,
          name: emergency.assignedTo.name,
          phone: emergency.assignedTo.phone,
        }
      : null,
    ...(showHistories
      ? {
          histories: emergency.histories.map((h) => ({
            id: h.id,
            status: h.status,
            ambulanceStaffLocation: h.ambulanceStaffLocation,
            note: h.note,
            createdAt: dayjs(h.createdAt)
              .tz(TIMEZONE)
              .format("YYYY-MM-DD HH:mm:ss"),
          })),
        }
      : {}),
    createdAt: dayjs(emergency.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(emergency.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
