import { doctorScheduleCollection, doctorScheduleResource } from "../resources/doctorSchedule.resource.js";
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

export const getDoctorScheduleById = catchAsync(async (req, res) => {
  const { id } = req.params;
  
  const doctorSchedule = await doctorScheduleService.getDoctorScheduleById(id);
  
  return apiSuccess(res, 200, "Doctor Schedule retrieved successfully", 
    doctorScheduleResource(doctorSchedule)
  );
});
