import {
  detailedReservationResource,
  reservationResource,
} from "../resources/reservation.resource.js";
import {
  cancelReservationSchema,
  reservationFilterSchema,
  reservationSchema,
  checkinSchema,
  reservationStatsSchema,
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
  const user = req.user;
  const userRole = req.userRole;
  const reservations = await reservationService.getAllReservations(
    query,
    user,
    userRole
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
  const userRole = req.userRole;
  const reservation = await reservationService.getReservationById(
    id,
    userIdentity,
    userRole
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

export const checkinReservation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = checkinSchema.parse(req.body);
  const { latitude, longitude } = parsedBody;
  const userIdentity = req.user.identity;

  const reservation = await reservationService.checkinReservation(
    id,
    latitude,
    longitude,
    userIdentity
  );

  return apiSuccess(
    res,
    200,
    "Check-in berhasil dilakukan",
    reservationResource(reservation)
  );
});

export const getReservationStats = catchAsync(async (req, res) => {
  const parsedQuery = reservationStatsSchema.parse(req.query);
  const stats = await reservationService.getReservationStats(parsedQuery);

  return apiSuccess(res, 200, "Statistik reservasi berhasil didapatkan", stats);
});
