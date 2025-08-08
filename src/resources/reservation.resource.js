export const reservationResource = (reservation) => {
  return {
    id: reservation.id,
    medicalCategory: reservation.medicalCategory.name,
    doctor: reservation.doctor.name,
    reservationDate: reservation.reservationDate.toISOString().split("T")[0],
    queueNumber: reservation.queueNumber,
    qrCodeUrl: reservation.qrCodeUrl,
    status: reservation.status,
    referralFile: reservation.referralFile,
    patient: {
      id: reservation.patient.id,
      name: reservation.patient.name,
    },
    createdAt: reservation.createdAt,
    updatedAt: reservation.updatedAt,
  };
};
