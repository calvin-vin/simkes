export default async function doctorSeeder(prisma) {
  console.log("🌱 Seeding doctors, schedules, and category relations...");

  // Get medical categories
  const poliUmum = await prisma.medicalCategory.findUnique({
    where: { externalId: "simrs-medcat-001" },
  });

  const poliAnak = await prisma.medicalCategory.findUnique({
    where: { externalId: "simrs-medcat-002" },
  });

  const poliJantung = await prisma.medicalCategory.findUnique({
    where: { externalId: "simrs-medcat-003" },
  });

  // 🩺 Seed Doctors
  const doctorCalvin = await prisma.doctor.upsert({
    where: { externalId: "simrs-doctor-001" },
    update: {},
    create: {
      externalId: "simrs-doctor-001",
      name: "dr. Calvin",
    },
  });

  const doctorJulian = await prisma.doctor.upsert({
    where: { externalId: "simrs-doctor-002" },
    update: {},
    create: {
      externalId: "simrs-doctor-002",
      name: "dr. Julian",
    },
  });

  // 🔗 Seed DoctorMedicalCategory (Calvin in 3 poli)
  const categoriesCalvin = [poliUmum, poliAnak, poliJantung];
  for (const cat of categoriesCalvin) {
    await prisma.doctorMedicalCategory.upsert({
      where: {
        doctorId_medicalCategoryId: {
          doctorId: doctorCalvin.id,
          medicalCategoryId: cat.id,
        },
      },
      update: {},
      create: {
        doctorId: doctorCalvin.id,
        medicalCategoryId: cat.id,
      },
    });
  }

  // 🔗 Julian hanya di Poli Umum
  await prisma.doctorMedicalCategory.upsert({
    where: {
      doctorId_medicalCategoryId: {
        doctorId: doctorJulian.id,
        medicalCategoryId: poliUmum.id,
      },
    },
    update: {},
    create: {
      doctorId: doctorJulian.id,
      medicalCategoryId: poliUmum.id,
    },
  });

  // 🗓️ Seed DoctorSchedules
  await prisma.doctorSchedule.upsert({
    where: { externalId: "simrs-schedule-001" },
    update: {},
    create: {
      externalId: "simrs-schedule-001",
      doctorId: doctorCalvin.id,
      specialization: "Umum",
      day: "Monday",
      startTime: "09:00",
      endTime: "12:00",
    },
  });

  await prisma.doctorSchedule.upsert({
    where: { externalId: "simrs-schedule-002" },
    update: {},
    create: {
      externalId: "simrs-schedule-002",
      doctorId: doctorCalvin.id,
      specialization: "Jantung",
      day: "Tuesday",
      startTime: "13:00",
      endTime: "16:00",
    },
  });

  await prisma.doctorSchedule.upsert({
    where: { externalId: "simrs-schedule-003" },
    update: {},
    create: {
      externalId: "simrs-schedule-003",
      doctorId: doctorJulian.id,
      specialization: "Umum",
      day: "Wednesday",
      startTime: "08:00",
      endTime: "11:00",
    },
  });

  console.log("✅ Doctor, schedules, and category relations seeder completed");
}
