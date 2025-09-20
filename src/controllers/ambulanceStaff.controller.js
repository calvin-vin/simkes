import { ambulanceStaffResource } from "../resources/ambulanceStaff.resource.js";
import { ambulanceStaffFilterSchema } from "../schemas/ambulanceStaff.schema.js";
import * as ambulanceStaffService from "../services/ambulanceStaff.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const ensureAmbulanceStaff = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ambulanceStaffService.ensureAmbulanceStaffExists(user);

  return apiSuccess(
    res,
    200,
    "Ambulance staff ensured successfully",
    ambulanceStaffResource(result)
  );
});

export const getAllAmbulanceStaff = catchAsync(async (req, res) => {
  const parsedQuery = ambulanceStaffFilterSchema.parse(req.query);
  const ambulanceStaffs = await ambulanceStaffService.getAllAmbulanceStaff(
    parsedQuery
  );

  return apiSuccess(res, 200, "Ambulance staff retrieved successfully", {
    results: ambulanceStaffs.results.map((staff) =>
      ambulanceStaffResource(staff)
    ),
    pagination: ambulanceStaffs.pagination,
  });
});

export const getAmbulanceStaffByIdentity = catchAsync(async (req, res) => {
  const { identity } = req.params;

  const ambulanceStaff =
    await ambulanceStaffService.getAmbulanceStaffByIdentity(identity);

  return apiSuccess(
    res,
    200,
    "Ambulance staff retrieved successfully",
    ambulanceStaffResource(ambulanceStaff)
  );
});

export const getMe = catchAsync(async (req, res) => {
  const { identity } = req.user;

  const ambulanceStaff =
    await ambulanceStaffService.getAmbulanceStaffByIdentity(identity);

  return apiSuccess(
    res,
    200,
    "Ambulance staff retrieved successfully",
    ambulanceStaffResource(ambulanceStaff)
  );
});

export const updateAmbulanceStaffPhoto = catchAsync(async (req, res) => {
  const { identity } = req.user;

  const updatedStaff = await ambulanceStaffService.updateAmbulanceStaffPhoto(
    identity,
    req.file
  );

  return apiSuccess(
    res,
    200,
    "Photo updated successfully",
    ambulanceStaffResource(updatedStaff)
  );
});
