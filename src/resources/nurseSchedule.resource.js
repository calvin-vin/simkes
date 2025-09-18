import { nurseResource } from "./nurse.resource.js";

export const nurseScheduleResource = (schedule) => {
  return {
    id: schedule.id,
    dayOfWeek: schedule.dayOfWeek,
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    isActive: schedule.isActive,
    nurse: schedule.nurse
      ? {
          id: schedule.nurse.id,
          name: schedule.nurse.name,
          speciality: schedule.nurse.speciality,
          photoUrl: schedule.nurse.photoUrl,
          rating: schedule.nurse.rating,
        }
      : null,
    createdAt: schedule.createdAt,
    updatedAt: schedule.updatedAt,
  };
};

export const nurseSchedulesResource = (data) => {
  return {
    results: data.results.map((schedule) => nurseScheduleResource(schedule)),
    pagination: data.pagination,
  };
};
