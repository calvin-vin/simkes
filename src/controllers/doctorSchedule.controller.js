import { doctorScheduleCollection } from "../resources/doctorSchedule.resource.js";
import { medicineResource } from "../resources/medicine.resource.js";
import { getAllDoctorScheduleSchema } from "../schemas/doctorSchedule.schema.js";
import * as doctorScheduleService from "../services/doctorSchedule.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllDoctorSchedules = catchAsync(async (req, res) => {
  const query = getAllDoctorScheduleSchema.parse(req.query);

  const doctorSchedules = await doctorScheduleService.getDoctorSchedules(query);

  return apiSuccess(res, 200, "Doctor Schedules retrieved successfully", {
    results: doctorScheduleCollection(doctorSchedules.results),
    pagination: doctorSchedules.pagination,
  });
});

export const getMedicineById = catchAsync(async (req, res) => {
  const medicines = await medicineService.getMedicineById(req.params.id);

  return apiSuccess(
    res,
    200,
    "Medicine retrieved successfully",
    medicineResource(medicines)
  );
});
