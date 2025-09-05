import {
  ensurePatientResource,
  patientResource,
} from "../resources/patient.resource.js";
import * as patientService from "../services/patient.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

import { updatePatientSchema } from "../schemas/patient.schema.js";

export const ensurePatient = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await patientService.ensurePatientExists(user);

  return apiSuccess(
    res,
    200,
    "Data pasien berhasil sinkronisasi",
    ensurePatientResource(result)
  );
});

export const getPatient = catchAsync(async (req, res) => {
  const identity = req.user.identity;

  const patient = await patientService.getPatientByIdentity(identity);

  return apiSuccess(
    res,
    200,
    "Data pasien berhasil diambil",
    patientResource(patient)
  );
});

export const updatePatient = catchAsync(async (req, res) => {
  const identity = req.user.identity;

  // Validasi input
  const validatedData = updatePatientSchema.parse(req.body);

  // Cek apakah pasien ada
  const existingPatient = await patientService.getPatientByIdentity(identity);

  // Update data pasien
  const updatedPatient = await patientService.updatePatient(
    identity,
    validatedData
  );

  return apiSuccess(
    res,
    200,
    "Data pasien berhasil diupdate",
    patientResource(updatedPatient)
  );
});
