import {
  detailedReservationResource,
  reservationResource,
} from "../resources/reservation.resource.js";
import {
  cancelReservationSchema,
  reservationFilterSchema,
  reservationSchema,
} from "../schemas/reservation.schema.js";
import * as reservationService from "../services/reservation.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const createReservation = catchAsync(async (req, res) => {
  const parsedBody = reservationSchema.parse(req.body);
  const userIdentity = req.user.identity;
  const reservation = await reservationService.createReservation(
    parsedBody,
    userIdentity
  );

  return apiSuccess(
    res,
    201,
    "Reservasi berhasil disimpan",
    reservationResource(reservation)
  );
});

export const getAllReservations = catchAsync(async (req, res) => {
  const query = reservationFilterSchema.parse(req.query);
  const identity = req.user.identity;
  const reservations = await reservationService.getAllReservations(
    query,
    identity
  );

  return apiSuccess(res, 200, "Daftar reservasi berhasil diambil", {
    results: reservations.results.map((reservation) =>
      reservationResource(reservation)
    ),
    pagination: reservations.pagination,
  });
});

export const getReservationById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userIdentity = req.user.identity;
  const reservation = await reservationService.getReservationById(
    id,
    userIdentity
  );

  return apiSuccess(
    res,
    200,
    "Detail reservasi berhasil diambil",
    detailedReservationResource(reservation)
  );
});

export const cancelReservation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { cancelReason } = cancelReservationSchema.parse(req.body);
  const userIdentity = req.user.identity;

  const cancelledReservation = await reservationService.cancelReservation(
    id,
    cancelReason,
    userIdentity
  );
  return apiSuccess(
    res,
    200,
    "Reservasi berhasil dibatalkan",
    reservationResource(cancelledReservation)
  );
});

export const deleteReservation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userIdentity = req.user.identity;
  const deletedReservation = await reservationService.deleteReservation(
    id,
    userIdentity
  );

  return apiSuccess(res, 200, "Reservasi berhasil dihapus", deletedReservation);
});
