import {
  facilitiesResource,
  facilityResource,
} from "../resources/facility.resource.js";
import {
  facilityFilterSchema,
  facilitySchema,
} from "../schemas/facility.schema.js";
import { facilityService } from "../services/facility.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllPublicFacilitiesController = catchAsync(async (req, res) => {
  const query = facilityFilterSchema.parse(req.query);
  const facilities = await facilityService.getAllPublicFacilities(query);

  return apiSuccess(
    res,
    200,
    "Daftar fasilitas berhasil diambil",
    facilitiesResource(facilities)
  );
});

export const getPublicFacilityByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const facility = await facilityService.getPublicFacilityById(id);

  return apiSuccess(
    res,
    200,
    "Detail fasilitas berhasil diambil",
    facilityResource(facility)
  );
});

export const getAllFacilitiesController = catchAsync(async (req, res) => {
  const query = facilityFilterSchema.parse(req.query);
  const facilities = await facilityService.getAllFacilities(query);

  return apiSuccess(
    res,
    200,
    "Daftar fasilitas berhasil diambil",
    facilitiesResource(facilities)
  );
});

export const getFacilityByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const facility = await facilityService.getFacilityById(id);

  return apiSuccess(
    res,
    200,
    "Detail fasilitas berhasil diambil",
    facilityResource(facility)
  );
});

export const createFacilityController = catchAsync(async (req, res) => {
  const parsedBody = facilitySchema.parse(req.body);

  const facility = await facilityService.createFacility(parsedBody);

  return apiSuccess(
    res,
    201,
    "Fasilitas berhasil disimpan",
    facilityResource(facility)
  );
});

export const updateFacilityController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = facilitySchema.parse(req.body);

  const facility = await facilityService.updateFacility(id, parsedBody);

  return apiSuccess(
    res,
    200,
    "Fasilitas berhasil diperbarui",
    facilityResource(facility)
  );
});

export const deleteFacilityController = catchAsync(async (req, res) => {
  const { id } = req.params;

  await facilityService.deleteFacility(id);

  return apiSuccess(res, 200, "Fasilitas berhasil dihapus", null);
});

export const addFacilityPhotoController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const photoFile = req.file;

  const photo = await facilityService.addFacilityPhoto(id, photoFile);

  return apiSuccess(res, 201, "Foto fasilitas berhasil ditambahkan", photo);
});

export const deleteFacilityPhotoController = catchAsync(async (req, res) => {
  const { photoId } = req.params;

  await facilityService.deleteFacilityPhoto(photoId);

  return apiSuccess(res, 200, "Foto fasilitas berhasil dihapus", null);
});
