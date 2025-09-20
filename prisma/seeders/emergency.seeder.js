import { fileURLToPath } from "url";
import { simkesPrisma, simrsPrisma } from "../../src/config/db.js";

export const seedEmergency = async (simkesPrisma, simrsPrisma) => {
  console.log("🚑 Seeding emergency data...");

  try {
    // 1. Seed emergency requests
    const emergencyRequests = await seedEmergencyRequests(
      simkesPrisma,
      simrsPrisma
    );

    // 2. Seed emergency histories berdasarkan requests yang dibuat
    await seedEmergencyHistories(simkesPrisma, emergencyRequests);

    console.log("✅ Emergency data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding emergency data:", error);
    throw error; // Re-throw error untuk ditangkap oleh caller
  }
};

/**
 * Fungsi untuk seeding emergency requests
 * @private
 */
const seedEmergencyRequests = async (prisma, rsPrisma) => {
  console.log("Seeding emergency requests...");

  // Pastikan ambulance staff sudah ada di database
  const staffs = await prisma.ambulanceStaff.findMany();
  if (staffs.length === 0) {
    console.log("No ambulance staff found. Please seed ambulance staff first.");
    return [];
  }

  // Ambil data pasien dari database menggunakan rsPrisma
  const patients = await rsPrisma.patient.findMany({
    select: { identity: true },
    take: 5,
    where: {
      isEnabled: true,
      isSimkes: true,
    },
  });

  if (patients.length === 0) {
    console.log("No patients found. Please seed patients first.");
    return [];
  }

  console.log(`Found ${patients.length} patients for emergency requests`);

  const emergencyRequests = [
    {
      id: "e1b3f8a0-1234-5678-9abc-def012345678",
      patientIdentity: patients[0]?.identity || "3507012201900010",
      location: "Jl. Merdeka No. 10, Jakarta Pusat",
      note: "Pasien mengalami sesak napas",
      status: "ASSIGNED",
      assignedToId: staffs[0].identity,
      createdAt: new Date(Date.now() - 3600000 * 24 * 2), // 2 hari yang lalu
      updatedAt: new Date(Date.now() - 3600000 * 24 * 2),
    },
    {
      id: "e2b3f8a0-1234-5678-9abc-def012345679",
      patientIdentity: patients[1]?.identity || "3507012201900011",
      location: "Jl. Pahlawan No. 15, Bandung",
      note: "Pasien mengalami kecelakaan",
      status: "COMPLETED",
      assignedToId: staffs[1].identity,
      createdAt: new Date(Date.now() - 3600000 * 24), // 1 hari yang lalu
      updatedAt: new Date(Date.now() - 3600000 * 24),
    },
    {
      id: "e3b3f8a0-1234-5678-9abc-def012345680",
      patientIdentity: patients[2]?.identity || "3507012201900012",
      location: "Jl. Diponegoro No. 25, Surabaya",
      note: "Pasien mengalami demam tinggi",
      status: "PENDING",
      assignedToId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "e4b3f8a0-1234-5678-9abc-def012345681",
      patientIdentity: patients[3]?.identity || "3507012201900013",
      location: "Jl. Malioboro No. 30, Yogyakarta",
      note: "Pasien mengalami sakit perut akut",
      status: "ON_THE_WAY",
      assignedToId: staffs[2].identity,
      createdAt: new Date(Date.now() - 3600000 * 2), // 2 jam yang lalu
      updatedAt: new Date(Date.now() - 3600000 * 2),
    },
    {
      id: "e5b3f8a0-1234-5678-9abc-def012345682",
      patientIdentity: patients[4]?.identity || "3507012201900014",
      location: "Jl. Pemuda No. 45, Semarang",
      note: "Pasien mengalami cedera kepala",
      status: "ARRIVED",
      assignedToId: staffs[3].identity,
      createdAt: new Date(Date.now() - 3600000), // 1 jam yang lalu
      updatedAt: new Date(Date.now() - 3600000),
    },
  ];

  console.log(`Upserting ${emergencyRequests.length} emergency requests...`);

  // Upsert emergency request data
  for (const request of emergencyRequests) {
    await prisma.emergencyRequest.upsert({
      where: { id: request.id },
      update: request,
      create: request,
    });
  }

  console.log(
    `${emergencyRequests.length} emergency requests seeded successfully!`
  );
  return emergencyRequests;
};

/**
 * Fungsi untuk seeding emergency histories
 * @private
 */
const seedEmergencyHistories = async (prisma, emergencyRequests) => {
  console.log("Seeding emergency histories...");

  // Jika emergencyRequests tidak diberikan, ambil dari database
  if (!emergencyRequests || emergencyRequests.length === 0) {
    emergencyRequests = await prisma.emergencyRequest.findMany();
    if (emergencyRequests.length === 0) {
      console.log(
        "No emergency requests found. Please seed emergency requests first."
      );
      return;
    }
  }

  const emergencyHistories = [
    // Histories untuk request pertama (ASSIGNED)
    {
      id: "h1b3f8a0-1234-5678-9abc-def012345678",
      emergencyRequestId: emergencyRequests[0].id,
      ambulanceStaffLocation: "Rumah Sakit Pusat",
      status: "PENDING",
      note: "Permintaan diterima",
      createdAt: new Date(Date.now() - 3600000 * 24 * 2 - 3600000), // 2 hari 1 jam yang lalu
    },
    {
      id: "h2b3f8a0-1234-5678-9abc-def012345679",
      emergencyRequestId: emergencyRequests[0].id,
      ambulanceStaffLocation: "Rumah Sakit Pusat",
      status: "ASSIGNED",
      note: "Ambulans ditugaskan",
      createdAt: new Date(Date.now() - 3600000 * 24 * 2), // 2 hari yang lalu
    },

    // Histories untuk request kedua (COMPLETED)
    {
      id: "h3b3f8a0-1234-5678-9abc-def012345680",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Rumah Sakit Bandung",
      status: "PENDING",
      note: "Permintaan diterima",
      createdAt: new Date(Date.now() - 3600000 * 24 - 18000000), // 1 hari 5 jam yang lalu
    },
    {
      id: "h4b3f8a0-1234-5678-9abc-def012345681",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Rumah Sakit Bandung",
      status: "ASSIGNED",
      note: "Ambulans ditugaskan",
      createdAt: new Date(Date.now() - 3600000 * 24 - 14400000), // 1 hari 4 jam yang lalu
    },
    {
      id: "h5b3f8a0-1234-5678-9abc-def012345682",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Jl. Sudirman",
      status: "ON_THE_WAY",
      note: "Ambulans dalam perjalanan",
      createdAt: new Date(Date.now() - 3600000 * 24 - 10800000), // 1 hari 3 jam yang lalu
    },
    {
      id: "h6b3f8a0-1234-5678-9abc-def012345683",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Jl. Pahlawan No. 15, Bandung",
      status: "ARRIVED",
      note: "Ambulans tiba di lokasi",
      createdAt: new Date(Date.now() - 3600000 * 24 - 7200000), // 1 hari 2 jam yang lalu
    },
    {
      id: "h7b3f8a0-1234-5678-9abc-def012345684",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Jl. Pahlawan No. 15, Bandung",
      status: "PATIENT_IN_CAR",
      note: "Pasien dalam ambulans",
      createdAt: new Date(Date.now() - 3600000 * 24 - 5400000), // 1 hari 1.5 jam yang lalu
    },
    {
      id: "h8b3f8a0-1234-5678-9abc-def012345685",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Jl. Sudirman",
      status: "TO_HOSPITAL",
      note: "Menuju rumah sakit",
      createdAt: new Date(Date.now() - 3600000 * 24 - 3600000), // 1 hari 1 jam yang lalu
    },
    {
      id: "h9b3f8a0-1234-5678-9abc-def012345686",
      emergencyRequestId: emergencyRequests[1].id,
      ambulanceStaffLocation: "Rumah Sakit Bandung",
      status: "COMPLETED",
      note: "Pasien telah tiba di rumah sakit",
      createdAt: new Date(Date.now() - 3600000 * 24), // 1 hari yang lalu
    },

    // Histories untuk request ketiga (PENDING)
    {
      id: "h10b3f8a0-1234-5678-9abc-def012345687",
      emergencyRequestId: emergencyRequests[2].id,
      ambulanceStaffLocation: null,
      status: "PENDING",
      note: "Permintaan diterima",
      createdAt: new Date(),
    },

    // Histories untuk request keempat (ON_THE_WAY)
    {
      id: "h11b3f8a0-1234-5678-9abc-def012345688",
      emergencyRequestId: emergencyRequests[3].id,
      ambulanceStaffLocation: "Rumah Sakit Yogyakarta",
      status: "PENDING",
      note: "Permintaan diterima",
      createdAt: new Date(Date.now() - 3600000 * 3), // 3 jam yang lalu
    },
    {
      id: "h12b3f8a0-1234-5678-9abc-def012345689",
      emergencyRequestId: emergencyRequests[3].id,
      ambulanceStaffLocation: "Rumah Sakit Yogyakarta",
      status: "ASSIGNED",
      note: "Ambulans ditugaskan",
      createdAt: new Date(Date.now() - 3600000 * 2.5), // 2.5 jam yang lalu
    },
    {
      id: "h13b3f8a0-1234-5678-9abc-def012345690",
      emergencyRequestId: emergencyRequests[3].id,
      ambulanceStaffLocation: "Jl. Gejayan",
      status: "ON_THE_WAY",
      note: "Ambulans dalam perjalanan",
      createdAt: new Date(Date.now() - 3600000 * 2), // 2 jam yang lalu
    },

    // Histories untuk request kelima (ARRIVED)
    {
      id: "h14b3f8a0-1234-5678-9abc-def012345691",
      emergencyRequestId: emergencyRequests[4].id,
      ambulanceStaffLocation: "Rumah Sakit Semarang",
      status: "PENDING",
      note: "Permintaan diterima",
      createdAt: new Date(Date.now() - 3600000 * 3), // 3 jam yang lalu
    },
    {
      id: "h15b3f8a0-1234-5678-9abc-def012345692",
      emergencyRequestId: emergencyRequests[4].id,
      ambulanceStaffLocation: "Rumah Sakit Semarang",
      status: "ASSIGNED",
      note: "Ambulans ditugaskan",
      createdAt: new Date(Date.now() - 3600000 * 2), // 2 jam yang lalu
    },
    {
      id: "h16b3f8a0-1234-5678-9abc-def012345693",
      emergencyRequestId: emergencyRequests[4].id,
      ambulanceStaffLocation: "Jl. Pandanaran",
      status: "ON_THE_WAY",
      note: "Ambulans dalam perjalanan",
      createdAt: new Date(Date.now() - 3600000 * 1.5), // 1.5 jam yang lalu
    },
    {
      id: "h17b3f8a0-1234-5678-9abc-def012345694",
      emergencyRequestId: emergencyRequests[4].id,
      ambulanceStaffLocation: "Jl. Pemuda No. 45, Semarang",
      status: "ARRIVED",
      note: "Ambulans tiba di lokasi",
      createdAt: new Date(Date.now() - 3600000), // 1 jam yang lalu
    },
  ];

  // Upsert emergency history data
  for (const history of emergencyHistories) {
    await prisma.emergencyHistory.upsert({
      where: { id: history.id },
      update: history,
      create: history,
    });
  }

  console.log(
    `${emergencyHistories.length} emergency histories seeded successfully!`
  );
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const seedAll = async () => {
    try {
      await seedEmergency(simkesPrisma, simrsPrisma);
    } catch (error) {
      console.error("Error seeding emergency data:", error);
    } finally {
      await simkesPrisma.$disconnect();
      await simrsPrisma.$disconnect();
    }
  };

  seedAll();
}
