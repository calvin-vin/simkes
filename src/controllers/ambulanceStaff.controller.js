import { ambulanceStaffResource } from "../resources/ambulanceStaff.resource.js";
import * as ambulanceStaffService from "../services/ambulanceStaff.js";
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
