import { fileURLToPath } from "url";
import { simrsPrisma } from "../../src/config/db.js";
import { v4 as uuidv4 } from "uuid";

/**
 * Seed data untuk reservations
 * @param {Object} prisma - Prisma client instance
 */
export const seedReservations = async (prisma = simrsPrisma) => {
  console.log("Seeding reservations...");

  // Hapus data reservations yang ada
  await prisma.reservation.deleteMany({
    where: {
      notes: "SIMKES",
    },
  });

  // Ambil data pasien dari database
  const patients = await prisma.patient.findMany({
    select: { identity: true },
    take: 5,
    where: {
      isEnabled: true,
      isSimkes: true,
    },
  });

  if (patients.length === 0) {
    console.log("No patients found. Please seed patients first.");
    return;
  }

  // Ambil data jadwal dokter dari database
  const doctorSchedules = await prisma.doctorSchedule.findMany({
    select: {
      id: true,
      unitId: true,
      doctorId: true,
      quota: true,
      days: true,
      note: true,
      startTime: true,
      endTime: true,
      doctor: {
        select: {
          id: true,
          fullName: true,
        },
      },
      unit: {
        select: {
          id: true,
          unitName: true,
        },
      },
    },
    take: 6,
    where: {
      isEnabled: true,
    },
  });

  // Ambil data payment method dari database
  const paymentMethods = await prisma.paymentMethod.findMany({
    select: { id: true },
    take: 3,
    where: {
      isEnabled: true,
    },
  });

  if (paymentMethods.length === 0) {
    console.log("No payment methods found.");
    return;
  }

  // Ambil data referral source dari database
  const referralSources = await prisma.referralSource.findMany({
    select: { id: true },
    take: 3,
    where: {
      isEnabled: true,
    },
  });

  // Data dummy untuk reservations
  const reservations = [];

  // Membuat reservasi berdasarkan jadwal dokter yang tersedia
  for (let i = 0; i < Math.min(doctorSchedules.length, patients.length); i++) {
    const schedule = doctorSchedules[i];
    const patient = patients[i];
    const paymentMethod = paymentMethods[i % paymentMethods.length];
    const referralSource = referralSources[i % referralSources.length];

    // Membuat reservasi aktif
    reservations.push({
      id: uuidv4().replace(/-/g, ""),
      isEnabled: true,
      unitId: schedule.unitId,
      identity: patient?.identity,
      queueNumber: i + 1,
      reservationNumber:
        "RSV-" + (new Date().getTime() + i).toString().substring(0, 10),
      reservationDate: new Date(Date.now() + 3600000 * 24), // besok
      paymentMethodId: paymentMethod?.id || 1,
      bpjsNumber: `000123456789${i}`,
      createdAt: new Date(),
      doctorId: schedule.doctorId,
      notes: `SIMKES`,
      queueType: `EA00${i + 1}`, // EA001, EB002, EC003, dll
      referralSourceId: referralSource?.id || 1,
      isConfirmed: i % 2 === 0, // selang-seling true/false
      callStatus: "0", // belum dipanggil
      isCancelled: false,
    });
  }

  // Tambahkan satu reservasi yang dibatalkan
  if (doctorSchedules.length > 0 && patients.length > 0) {
    reservations.push({
      id: uuidv4().replace(/-/g, ""),
      isEnabled: true, // reservation yang dibatalkan
      unitId: doctorSchedules[0].unitId,
      identity: patients[0]?.identity,
      queueNumber: reservations.length + 1,
      reservationNumber:
        "RSV-" +
        (new Date().getTime() + reservations.length)
          .toString()
          .substring(0, 10),
      reservationDate: new Date(Date.now() - 3600000 * 24), // kemarin
      paymentMethodId: paymentMethods[0]?.id || 1,
      bpjsNumber: "0001234567890",
      createdAt: new Date(Date.now() - 3600000 * 24 * 2), // 2 hari yang lalu
      doctorId: doctorSchedules[0].doctorId,
      notes: "SIMKES",
      queueType: "EC002",
      referralSourceId: referralSources[0]?.id || 1,
      isConfirmed: true,
      callStatus: "0", // belum dipanggil
      isCancelled: true,
      cancelReason: "Pasien membatalkan reservasi",
    });
  }

  // Masukkan data reservations ke database
  let createdCount = 0;
  for (const reservation of reservations) {
    try {
      await prisma.reservation.create({
        data: reservation,
      });
      createdCount++;
    } catch (error) {
      console.error(`Error creating reservation: ${error.message}`);
    }
  }

  console.log(`Berhasil menambahkan ${createdCount} reservasi`);
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedReservations()
    .then(() => {
      console.log("Reservation seeding completed successfully!");
      return simrsPrisma.$disconnect();
    })
    .catch((error) => {
      console.error("Error seeding reservations:", error);
      return simrsPrisma.$disconnect();
    });
}
