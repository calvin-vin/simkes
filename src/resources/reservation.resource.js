import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const reservationResource = (reservation) => {
  return {
    id: reservation.id,
    queueNumber: reservation.queueNumber,
    reservationNumber: reservation.reservationNumber,
    reservationDate: dayjs(reservation.reservationDate).format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    bpjsNumber: reservation.bpjsNumber,
    otherInsuranceNumber: reservation.otherInsuranceNumber,
    createdAt: reservation.createdAt
      ? dayjs(reservation.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : dayjs(new Date()).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss"),
    referralNumber: reservation.referralNumber,
    notes: reservation.notes,
    queueType: reservation.queueType,
    isConfirmed: reservation.isConfirmed,
    callStatus: reservation.callStatus,
    isCancelled: reservation.isCancelled,
    cancelReason: reservation.cancelReason,
    educationId: reservation.educationId,
    patientType: reservation.patientType,
    qrCodeUrl: reservation.qrCodeUrl,
    patient: reservation.patient
      ? {
          id: reservation.patient.id,
          name: reservation.patient.name,
          identity: reservation.patient.identity,
          genderId: reservation.patient.genderId,
          birthPlace: reservation.patient.birthPlace,
          birthDate: dayjs(reservation.patient.birthDate).format("YYYY-MM-DD"),
          motherName: reservation.patient.motherName,
          fatherName: reservation.patient.fatherName,
          spouseName: reservation.patient.spouseName,
          phoneNumber: reservation.patient.phoneNumber,
          registeredAt: dayjs(reservation.patient.registeredAt)
            .tz(TIMEZONE)
            .format("YYYY-MM-DD HH:mm:ss"),
        }
      : null,
    doctor: reservation.doctor
      ? {
          id: reservation.doctor.id,
          fullName: reservation.doctor.fullName,
          identityNo: reservation.doctor.identityNo,
        }
      : null,
    unit: reservation.unit
      ? {
          id: reservation.unit.id,
          unitName: reservation.unit.unitName,
        }
      : null,
    paymentMethod: reservation.paymentMethod
      ? {
          id: reservation.paymentMethod.id,
          displayName: reservation.paymentMethod.displayName,
        }
      : null,
    referralSource: reservation.referralSource
      ? {
          id: reservation.referralSource.id,
          source: reservation.referralSource.source,
        }
      : null,
    updatedAt: dayjs(new Date()).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss"),
    qrCodeUrl: reservation.qrCodeUrl || null,
  };
};

/**
 * Format detailed reservation response
 * @param {Object} reservation - Reservation object with relations
 * @returns {Object} Formatted reservation object with relations
 */
export const detailedReservationResource = (reservation) => {
  return reservationResource(reservation);
};
