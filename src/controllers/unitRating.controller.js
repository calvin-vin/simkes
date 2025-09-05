import {
  unitRatingResource,
  unitRatingsResource,
} from "../resources/unitRating.resource.js";
import {
  unitRatingFilterSchema,
  unitRatingSchema,
} from "../schemas/unitRating.schema.js";
import {
  createUnitRating,
  getAllUnitRatings,
  getUnitRatingById,
  getUnitRatingByReservationId,
} from "../services/unitRating.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const createUnitRatingController = catchAsync(async (req, res) => {
  const parsedBody = unitRatingSchema.parse(req.body);
  const userIdentity = req.user.identity;

  const unitRating = await createUnitRating(parsedBody, userIdentity);

  return apiSuccess(
    res,
    201,
    "Penilaian unit berhasil disimpan",
    unitRatingResource(unitRating)
  );
});

/**
 * Controller untuk mendapatkan semua penilaian unit
 */
export const getAllUnitRatingsController = catchAsync(async (req, res) => {
  const query = unitRatingFilterSchema.parse(req.query);
  const unitRatings = await getAllUnitRatings(query);

  return apiSuccess(
    res,
    200,
    "Daftar penilaian unit berhasil diambil",
    unitRatingsResource(unitRatings)
  );
});

/**
 * Controller untuk mendapatkan penilaian unit berdasarkan ID
 */
export const getUnitRatingByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const unitRating = await getUnitRatingById(id);

  return apiSuccess(
    res,
    200,
    "Detail penilaian unit berhasil diambil",
    unitRatingResource(unitRating)
  );
});

/**
 * Controller untuk mendapatkan penilaian unit berdasarkan ID reservasi
 */
export const getUnitRatingByReservationIdController = catchAsync(
  async (req, res) => {
    const { reservationId } = req.params;
    const unitRating = await getUnitRatingByReservationId(reservationId);

    return apiSuccess(
      res,
      200,
      "Detail penilaian unit berhasil diambil",
      unitRatingResource(unitRating)
    );
  }
);