import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const ensurePatientResource = (patient) => {
  return {
    id: patient.id,
    name: patient.patientName,
    identity: patient.identity,
    phoneNumber: patient.phoneNumber,
    registeredAt: patient.registeredAt
      ? dayjs(patient.registeredAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

export const patientResource = (patient) => {
  return {
    id: patient.id,
    name: patient.name,
    identity: patient.identity,
    gender: patient.gender
      ? {
          id: patient.gender.id,
          name: patient.gender.gender,
        }
      : null,
    birthPlace: patient.birthPlace,
    birthDate: patient.birthDate
      ? dayjs(patient.birthDate).tz(TIMEZONE).format("YYYY-MM-DD")
      : null,
    motherName: patient.motherName,
    fatherName: patient.fatherName,
    spouseName: patient.spouseName,
    bpjsNumber: patient.bpjsNumber,
    otherInsuranceNumber: patient.otherInsuranceNumber,
    phoneNumber: patient.phoneNumber,
    homeAddress: patient.homeAddress,
    registeredAt: patient.registeredAt
      ? dayjs(patient.registeredAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};
