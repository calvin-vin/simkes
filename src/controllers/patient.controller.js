import * as patientService from "../services/patient.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const ensurePatient = catchAsync(async (req, res) => {
  const user = req.user;

  const result = await patientService.ensurePatientExists(user);

  return apiSuccess(res, 200, "Patient ensured successfully", result);
});
