import {
  facilityRatingResource,
  facilityRatingsResource,
  facilityAverageRatingResource,
} from "../resources/facilityRating.resource.js";
import {
  facilityRatingFilterSchema,
  facilityRatingSchema,
} from "../schemas/facilityRating.schema.js";
import {
  createFacilityRating,
  getAllFacilityRatings,
  getFacilityRatingById,
  getFacilityRatingByReservationId,
  getAverageRatingByFacilityId,
} from "../services/facilityRating.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Controller untuk membuat penilaian fasilitas
 */
export const createFacilityRatingController = catchAsync(async (req, res) => {
  const parsedBody = facilityRatingSchema.parse(req.body);
  const userIdentity = req.user.identity;

  const facilityRating = await createFacilityRating(parsedBody, userIdentity);

  return apiSuccess(
    res,
    201,
    "Penilaian fasilitas berhasil disimpan",
    facilityRatingResource(facilityRating)
  );
});

/**
 * Controller untuk mendapatkan semua penilaian fasilitas
 */
export const getAllFacilityRatingsController = catchAsync(async (req, res) => {
  const query = facilityRatingFilterSchema.parse(req.query);
  const facilityRatings = await getAllFacilityRatings(query);

  return apiSuccess(
    res,
    200,
    "Daftar penilaian fasilitas berhasil diambil",
    facilityRatingsResource(facilityRatings)
  );
});

/**
 * Controller untuk mendapatkan penilaian fasilitas berdasarkan ID
 */
export const getFacilityRatingByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const facilityRating = await getFacilityRatingById(id);

  return apiSuccess(
    res,
    200,
    "Detail penilaian fasilitas berhasil diambil",
    facilityRatingResource(facilityRating)
  );
});

/**
 * Controller untuk mendapatkan penilaian fasilitas berdasarkan ID reservasi
 */
export const getFacilityRatingByReservationIdController = catchAsync(
  async (req, res) => {
    const { reservationId } = req.params;
    const facilityRating = await getFacilityRatingByReservationId(
      reservationId
    );

    return apiSuccess(
      res,
      200,
      "Detail penilaian fasilitas berhasil diambil",
      facilityRating
    );
  }
);

/**
 * Controller untuk mendapatkan rata-rata rating fasilitas berdasarkan ID fasilitas
 */
export const getAverageRatingByFacilityIdController = catchAsync(
  async (req, res) => {
    const { facilityId } = req.params;
    const averageRating = await getAverageRatingByFacilityId(facilityId);

    return apiSuccess(
      res,
      200,
      "Rata-rata rating fasilitas berhasil diambil",
      facilityAverageRatingResource(averageRating)
    );
  }
);
