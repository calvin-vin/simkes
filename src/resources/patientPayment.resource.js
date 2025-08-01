import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";
import { paymentMethodResource } from "./paymentMethod.resource.js";
import { patientResource } from "./patient.resource.js";

export const patientPaymentResource = (patientPayment) => {
  return {
    id: patientPayment.id,
    participantId: patientPayment.participantId,
    paymentFile: patientPayment.paymentFile ? patientPayment.paymentFile : null,
    paymentMethod: paymentMethodResource(patientPayment.paymentMethod),
    patient: patientResource(patientPayment.patient),
    createdAt: dayjs(patientPayment.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(patientPayment.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};
