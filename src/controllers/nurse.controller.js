import catchAsync from "../utils/catchAsync.js";
import apiSuccess from "../utils/apiSuccess.js";
import nurseService from "../services/nurse.service.js";
import { nurseResource, nursesResource } from "../resources/nurse.resource.js";
import {
  getAllNurseSchema,
  createNurseSchema,
  updateNurseSchema,
} from "../schemas/nurse.schema.js";

export const getNurseStatsController = catchAsync(async (req, res) => {
  const stats = await nurseService.getNurseStats();

  return apiSuccess(res, 200, "Statistik perawat berhasil didapatkan", stats);
});

export const getAllActiveNursesController = catchAsync(async (req, res) => {
  const parsedQuery = getAllNurseSchema.parse(req.query);
  const nurses = await nurseService.getAllActiveNurses(parsedQuery);

  return apiSuccess(
    res,
    200,
    "Daftar perawat berhasil didapatkan",
    nursesResource(nurses)
  );
});

export const getActiveNurseByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const nurse = await nurseService.getActiveNurseById(id);

  return apiSuccess(
    res,
    200,
    "Data perawat berhasil didapatkan",
    nurseResource(nurse)
  );
});

export const getAllNursesController = catchAsync(async (req, res) => {
  const parsedQuery = getAllNurseSchema.parse(req.query);
  const nurses = await nurseService.getAllNurses(parsedQuery);

  return apiSuccess(
    res,
    200,
    "Daftar perawat berhasil didapatkan",
    nursesResource(nurses)
  );
});

export const getNurseByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const nurse = await nurseService.getNurseById(id);

  return apiSuccess(
    res,
    200,
    "Data perawat berhasil didapatkan",
    nurseResource(nurse)
  );
});

export const createNurseController = catchAsync(async (req, res) => {
  const parsedBody = createNurseSchema.parse(req.body);
  const photoFile = req.file;
  const nurse = await nurseService.createNurse(parsedBody, photoFile);

  return apiSuccess(
    res,
    201,
    "Perawat berhasil ditambahkan",
    nurseResource(nurse)
  );
});

export const updateNurseController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = updateNurseSchema.parse(req.body);
  const photoFile = req.file;
  const nurse = await nurseService.updateNurse(id, parsedBody, photoFile);

  return apiSuccess(
    res,
    200,
    "Perawat berhasil diperbarui",
    nurseResource(nurse)
  );
});

export const deleteNurseController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await nurseService.deleteNurse(id);

  return apiSuccess(res, 200, "Data perawat berhasil dihapus", null);
});
