import dayjs from "dayjs";

export default async function reservationSeeder(prisma) {
  console.log("🌱 Seeding reservations...");

  // Ambil data dokter dan medical category yang sudah di seed sebelumnya
  const doctorCalvin = await prisma.doctor.findUnique({
    where: { externalId: "simrs-doctor-001" },
  });

  const poliUmum = await prisma.medicalCategory.findUnique({
    where: { externalId: "simrs-medcat-001" },
  });

  const patientJohn = await prisma.patient.findUnique({
    where: { externalId: "nik-3172010101010001" },
  });

  const patientJane = await prisma.patient.findUnique({
    where: { externalId: "nik-3172010101010002" },
  });

  // Seed reservation untuk John Doe
  await prisma.reservation.upsert({
    where: { id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa" },
    update: {},
    create: {
      id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      patientId: patientJohn.id,
      medicalCategoryId: poliUmum.id,
      doctorId: doctorCalvin.id,
      reservationDate: dayjs().add(1, "day").toDate(),
      queueNumber: "C001",
      qrCodeUrl: "https://app.com/qrcode/C001.png",
      status: "WAITING",
      referralFile: null,
    },
  });

  // Seed reservation untuk Jane Smith
  await prisma.reservation.upsert({
    where: { id: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb" },
    update: {},
    create: {
      id: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      patientId: patientJane.id,
      medicalCategoryId: poliUmum.id,
      doctorId: doctorCalvin.id,
      reservationDate: dayjs().add(1, "day").toDate(),
      queueNumber: "C002",
      qrCodeUrl: "https://app.com/qrcode/C002.png",
      status: "WAITING",
      referralFile: null,
    },
  });

  console.log("✅ Reservations seeder completed");
}
