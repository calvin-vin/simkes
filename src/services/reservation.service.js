import dayjs from "dayjs";
import path from "path";
import prisma from "../config/db.js";
import { getIO } from "../socket.js";
import ApiError from "../utils/apiError.js";
import { findDoctorOrFail } from "./doctor.service.js";
import { findMedicalCategoryOrFail } from "./medicalCategory.service.js";
import { findPatientWithExternalIdOrFail } from "./patient.service.js";
import { generateQr } from "../utils/generateQr.js";
import { saveFile } from "../utils/saveFile.js";

export const createReservation = async ({
  patientExternalId,
  medicalCategoryId,
  doctorId,
  reservationDate,
  referralFile,
}) => {
  const [doctor, medicalCategory, patient] = await Promise.all([
    findDoctorOrFail({ doctorId, includes: { schedules: true } }),
    findMedicalCategoryOrFail({ medicalCategoryId }),
    findPatientWithExternalIdOrFail({
      patientExternalId,
      select: { id: true, name: true },
    }),
  ]);

  await checkActiveReservationWithSameDoctor({
    patientId: patient.id,
    doctorId,
  });

  const [_, __, formattedQueueNumber] = await Promise.all([
    validateReservationDateOnDoctorSchedule(reservationDate, doctor),
    validateReservationDateNotPast(reservationDate),
    generateFormattedQueueNumber({
      doctorId,
      reservationDate,
      doctorCode: doctor.code,
    }),
  ]);

  const qrContent = `${formattedQueueNumber} | ${medicalCategoryId} | ${reservationDate}`;
  const qrFilePath = await generateQr({
    content: qrContent,
    subFolder: path.join(
      "reservations",
      medicalCategory.name.replace(/\s+/g, "_"),
      dayjs(reservationDate).format("YYYY-MM-DD")
    ),
    filenamePrefix: `${formattedQueueNumber}-${patient.name}`,
  });
  const qrCodeUrl = `${process.env.HOST_URL}/${qrFilePath.replace(/\\/g, "/")}`;

  let referralFileUrl = null;
  if (referralFile) {
    const savedFilePath = await saveFile({
      buffer: referralFile.buffer,
      baseFolder: "public",
      subFolder: path.join(
        "referrals",
        medicalCategory.name.replace(/\s+/g, "_"),
        dayjs(reservationDate).format("YYYY-MM-DD")
      ),
      filenamePrefix: `${formattedQueueNumber}-${patient.name}`,
      extension: path.extname(referralFile.originalname),
    });

    referralFileUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  const reservation = await prisma.reservation.create({
    data: {
      patientId: patient.id,
      medicalCategoryId,
      doctorId,
      reservationDate: new Date(reservationDate),
      queueNumber: formattedQueueNumber,
      qrCodeUrl,
      referralFile: referralFileUrl,
    },
    include: {
      patient: true,
      doctor: true,
      medicalCategory: true,
    },
  });

  const io = getIO();
  io.emit("reservation:updated", {
    doctorId: reservation.doctorId,
    reservationDate: reservation.reservationDate,
    message: "New reservation created",
    queueNumber: formattedQueueNumber,
  });

  return reservation;
};

export const skipReservation = async (reservationId) => {
  const reservation = await prisma.reservation.findUnique({
    where: { id: reservationId },
  });

  if (!reservation) {
    throw new Error("Reservation not found");
  }

  const maxQueue = await prisma.reservation.aggregate({
    where: {
      doctorId: reservation.doctorId,
      reservationDate: reservation.reservationDate,
    },
    _max: {
      queueNumber: true,
    },
  });

  const newQueueNumber = (maxQueue._max.queueNumber || 0) + 1;

  const updated = await prisma.reservation.update({
    where: { id: reservationId },
    data: {
      queueNumber: newQueueNumber,
      status: "WAITING",
    },
  });

  const io = getIO();
  io.emit("reservation:updated", {
    doctorId: updated.doctorId,
    reservationDate: updated.reservationDate,
    message: "Reservation skipped",
  });

  return updated;
};

export const checkActiveReservationWithSameDoctor = async ({
  patientId,
  doctorId,
}) => {
  const existingActiveReservation = await prisma.reservation.findFirst({
    where: {
      patientId,
      doctorId,
      NOT: {
        status: "DONE",
      },
    },
  });

  if (existingActiveReservation) {
    throw new ApiError(
      "You already have an unfinished reservation with this doctor. Please complete it before making a new one.",
      400
    );
  }

  return existingActiveReservation;
};

export const validateReservationDateOnDoctorSchedule = async (
  reservationDate,
  doctor
) => {
  const reservationDay = dayjs(reservationDate).format("dddd").toUpperCase(); // e.g. SENIN

  const hasSchedule = doctor.schedules.some(
    (schedule) => schedule.day.toUpperCase() === reservationDay
  );

  if (!hasSchedule) {
    throw new ApiError("Doctor is not available on the selected date", 400);
  }

  return true;
};

export const validateReservationDateNotPast = async (reservationDate) => {
  const today = dayjs().startOf("day");
  const selectedDate = dayjs(reservationDate).startOf("day");

  const isPast = selectedDate.isBefore(today);

  if (isPast) {
    throw new ApiError("Reservation date cannot be in the past", 400);
  }

  return true;
};

export const generateFormattedQueueNumber = async ({
  doctorId,
  reservationDate,
  doctorCode,
}) => {
  const maxQueue = await prisma.reservation.aggregate({
    where: {
      doctorId,
      reservationDate: new Date(reservationDate),
    },
    _max: {
      queueNumber: true,
    },
  });

  const nextQueueNumber = (maxQueue._max.queueNumber || 0) + 1;

  const formattedQueueNumber = `${doctorCode}${String(nextQueueNumber).padStart(
    3,
    "0"
  )}`;

  return formattedQueueNumber;
};
