import { emergencyResource } from "../resources/emergency.resource.js";
import {
  emergencySchema,
  updateStatusEmergencySchema,
} from "../schemas/emergency.schema.js";
import * as emergencyService from "../services/emergency.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const createEmergency = catchAsync(async (req, res) => {
  const parsedBody = emergencySchema.parse(req.body);
  const payload = {
    patientIdentity: req.user?.identity,
    ...parsedBody,
  };

  const result = await emergencyService.createEmergencyRequest(payload);

  return apiSuccess(
    res,
    201,
    "Emergency request created successfully",
    emergencyResource(result)
  );
});

export const getAllEmergencies = catchAsync(async (req, res) => {
  const emergencies = await emergencyService.getAllEmergencies(
    req.query,
    req.user,
    req.userRole
  );
  return apiSuccess(res, 200, "Emergency requests retrieved successfully", {
    results: emergencies.results.map((emergency) =>
      emergencyResource(emergency)
    ),
    ...emergencies.pagination,
  });
});

export const getEmergencyById = catchAsync(async (req, res) => {
  const result = await emergencyService.getEmergencyById(
    req.params.id,
    req.user,
    req.userRole
  );
  const showHistories = true;
  return apiSuccess(
    res,
    200,
    "Emergency request retrieved successfully",
    emergencyResource(result, showHistories)
  );
});

export const assignEmergency = catchAsync(async (req, res) => {
  const parsedBody = emergencySchema.parse(req.body);
  const payload = {
    emergencyId: req.params.id,
    staffId: req.user?.id,
    ...parsedBody,
  };

  const result = await emergencyService.assignEmergencyToStaff(payload);

  return apiSuccess(
    res,
    200,
    "Emergency request assigned successfully",
    emergencyResource(result)
  );
});

export const updateEmergencyStatus = catchAsync(async (req, res) => {
  const parsedBody = updateStatusEmergencySchema.parse(req.body);
  const payload = {
    emergencyId: req.params.id,
    ...parsedBody,
  };
  const result = await emergencyService.updateEmergencyStatus(payload);

  return apiSuccess(
    res,
    200,
    "Emergency request status updated successfully",
    emergencyResource(result)
  );
});
