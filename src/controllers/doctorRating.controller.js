import {
  doctorRatingResource,
  doctorRatingsResource,
} from "../resources/doctorRating.resource.js";
import {
  doctorRatingFilterSchema,
  doctorRatingSchema,
} from "../schemas/doctorRating.schema.js";
import {
  createDoctorRating,
  getAllDoctorRatings,
  getDoctorRatingById,
  getDoctorRatingByReservationId,
} from "../services/doctorRating.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const createDoctorRatingController = catchAsync(async (req, res) => {
  const parsedBody = doctorRatingSchema.parse(req.body);
  const userIdentity = req.user.identity;

  const doctorRating = await createDoctorRating(parsedBody, userIdentity);

  return apiSuccess(
    res,
    201,
    "Penilaian dokter berhasil disimpan",
    doctorRatingResource(doctorRating)
  );
});

/**
 * Controller untuk mendapatkan semua penilaian dokter
 */
export const getAllDoctorRatingsController = catchAsync(async (req, res) => {
  const query = doctorRatingFilterSchema.parse(req.query);
  const doctorRatings = await getAllDoctorRatings(query);

  return apiSuccess(
    res,
    200,
    "Daftar penilaian dokter berhasil diambil",
    doctorRatingsResource(doctorRatings)
  );
});

/**
 * Controller untuk mendapatkan penilaian dokter berdasarkan ID
 */
export const getDoctorRatingByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const doctorRating = await getDoctorRatingById(id);

  return apiSuccess(
    res,
    200,
    "Detail penilaian dokter berhasil diambil",
    doctorRatingResource(doctorRating)
  );
});

/**
 * Controller untuk mendapatkan penilaian dokter berdasarkan ID reservasi
 */
export const getDoctorRatingByReservationIdController = catchAsync(
  async (req, res) => {
    const { reservationId } = req.params;
    const doctorRating = await getDoctorRatingByReservationId(reservationId);

    return apiSuccess(
      res,
      200,
      "Detail penilaian dokter berhasil diambil",
      doctorRatingResource(doctorRating)
    );
  }
);
