import {
  nurseScheduleResource,
  nurseSchedulesResource,
} from "../resources/nurseSchedule.resource.js";
import {
  createNurseScheduleSchema,
  getAllNurseScheduleSchema,
  updateNurseScheduleSchema,
} from "../schemas/nurseSchedule.schema.js";
import nurseScheduleService from "../services/nurseSchedule.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllNurseSchedulesController = catchAsync(async (req, res) => {
  const parsedQuery = getAllNurseScheduleSchema.parse(req.query);
  const schedules = await nurseScheduleService.getAllNurseSchedules(
    parsedQuery
  );

  return apiSuccess(
    res,
    200,
    "Daftar jadwal perawat berhasil didapatkan",
    nurseSchedulesResource(schedules)
  );
});

export const getNurseScheduleByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const schedule = await nurseScheduleService.getNurseScheduleById(id);

  return apiSuccess(
    res,
    200,
    "Jadwal perawat berhasil didapatkan",
    nurseScheduleResource(schedule)
  );
});

export const getNurseSchedulesByNurseIdController = catchAsync(
  async (req, res) => {
    const { nurseId } = req.params;
    const schedules = await nurseScheduleService.getNurseSchedulesByNurseId(
      nurseId
    );

    return apiSuccess(
      res,
      200,
      "Daftar jadwal perawat berhasil didapatkan",
      schedules.map((schedule) => nurseScheduleResource(schedule))
    );
  }
);

export const createNurseScheduleController = catchAsync(async (req, res) => {
  const parsedBody = createNurseScheduleSchema.parse(req.body);
  const schedule = await nurseScheduleService.createNurseSchedule(parsedBody);

  return apiSuccess(
    res,
    201,
    "Jadwal perawat berhasil disimpan",
    nurseScheduleResource(schedule)
  );
});

export const updateNurseScheduleController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = updateNurseScheduleSchema.parse(req.body);
  const schedule = await nurseScheduleService.updateNurseSchedule(
    id,
    parsedBody
  );

  return apiSuccess(
    res,
    200,
    "Jadwal perawat berhasil diperbarui",
    nurseScheduleResource(schedule)
  );
});

export const deleteNurseScheduleController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await nurseScheduleService.deleteNurseSchedule(id);

  return apiSuccess(res, 200, "Jadwal perawat berhasil dihapus", null);
});
