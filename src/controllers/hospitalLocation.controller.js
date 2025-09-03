import { hospitalLocationResource } from "../resources/hospitalLocation.resource.js";
import { hospitalLocationSchema } from "../schemas/hospitalLocation.schema.js";
import {
  getHospitalLocation,
  saveHospitalLocation,
} from "../services/hospitalLocation.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getHospitalLocationController = catchAsync(async (req, res) => {
  const hospitalLocation = await getHospitalLocation();

  return apiSuccess(
    res,
    201,
    "Lokasi rumah sakit berhasil diambil",
    hospitalLocationResource(hospitalLocation)
  );
});

export const saveHospitalLocationController = catchAsync(async (req, res) => {
  const validatedData = hospitalLocationSchema.parse(req.body);

  const hospitalLocation = await saveHospitalLocation(validatedData);

  return apiSuccess(
    res,
    200,
    "Lokasi rumah sakit berhasil disimpan",
    hospitalLocationResource(hospitalLocation)
  );
});
