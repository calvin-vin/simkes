import {
  nurseAverageRatingResource,
  nurseRatingResource,
  nurseRatingsResource,
} from "../resources/nurseRating.resource.js";
import {
  createNurseRatingSchema,
  getAllNurseRatingSchema,
} from "../schemas/nurseRating.schema.js";
import {
  createNurseRating,
  getAllNurseRatings,
  getAverageRatingByNurseId,
  getNurseRatingById,
  getNurseRatingByReservationId,
} from "../services/nurseRating.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Controller untuk membuat penilaian perawat
 */
export const createNurseRatingController = catchAsync(async (req, res) => {
  const parsedBody = createNurseRatingSchema.parse(req.body);
  const userIdentity = req.user.identity;

  const nurseRating = await createNurseRating(parsedBody, userIdentity);

  return apiSuccess(
    res,
    201,
    "Penilaian perawat berhasil disimpan",
    nurseRatingResource(nurseRating)
  );
});

/**
 * Controller untuk mendapatkan semua penilaian perawat
 */
export const getAllNurseRatingsController = catchAsync(async (req, res) => {
  const query = getAllNurseRatingSchema.parse(req.query);
  const nurseRatings = await getAllNurseRatings(query);

  return apiSuccess(
    res,
    200,
    "Daftar penilaian perawat berhasil diambil",
    nurseRatingsResource(nurseRatings)
  );
});

/**
 * Controller untuk mendapatkan penilaian perawat berdasarkan ID
 */
export const getNurseRatingByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const nurseRating = await getNurseRatingById(id);

  return apiSuccess(
    res,
    200,
    "Detail penilaian perawat berhasil diambil",
    nurseRatingResource(nurseRating)
  );
});

/**
 * Controller untuk mendapatkan penilaian perawat berdasarkan ID reservasi
 */
export const getNurseRatingByReservationIdController = catchAsync(
  async (req, res) => {
    const { reservationId } = req.params;
    const nurseRating = await getNurseRatingByReservationId(reservationId);

    return apiSuccess(
      res,
      200,
      "Detail penilaian perawat berhasil diambil",
      nurseRating
    );
  }
);

/**
 * Controller untuk mendapatkan rata-rata rating perawat berdasarkan ID perawat
 */
export const getAverageRatingByNurseIdController = catchAsync(
  async (req, res) => {
    const { nurseId } = req.params;
    const averageRating = await getAverageRatingByNurseId(nurseId);

    return apiSuccess(
      res,
      200,
      "Rata-rata rating perawat berhasil diambil",
      nurseAverageRatingResource(averageRating)
    );
  }
);
