export const doctorScheduleResource = (schedule) => {
  return {
    id: schedule.id,
    unitId: schedule.unitId,
    unitName: schedule.unit?.unitName,
    doctorId: schedule.doctor.id,
    fullName: schedule.doctor.fullName,
    quota: schedule.quota,
    averageRating: schedule.doctor.averageRating || 0,
    totalRatings: schedule.doctor.totalRatings || 0,
    startTime: schedule.startTime
      ? schedule.startTime.toTimeString().split(" ")[0]
      : null, // => "08:00:00"
    endTime: schedule.endTime
      ? schedule.endTime.toTimeString().split(" ")[0]
      : null, // => "14:00:00"
    note: schedule.note,
    days: schedule.days,
  };
};

export const doctorScheduleCollection = (schedules) => {
  return schedules.map(doctorScheduleResource);
};
