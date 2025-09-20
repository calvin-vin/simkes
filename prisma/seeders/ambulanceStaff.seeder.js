import { fileURLToPath } from "url";
import { simkesPrisma } from "../../src/config/db.js";

export const seedAmbulanceStaff = async (prisma) => {
  console.log("Seeding ambulance staff...");

  const ambulanceStaffs = [
    {
      identity: "3507012201900001",
      name: "Budi Santoso",
      phone: "081234567890",
      email: "budi.santoso@example.com",
      photo: `${process.env.HOST_URL}/ambulance-staffs/staff-3507012201900001.jpg`,
    },
    {
      identity: "3507012201900002",
      name: "Dewi Lestari",
      phone: "081234567891",
      email: "dewi.lestari@example.com",
      photo: `${process.env.HOST_URL}/ambulance-staffs/staff-3507012201900002.jpg`,
    },
    {
      identity: "3507012201900003",
      name: "Ahmad Rizki",
      phone: "081234567892",
      email: "ahmad.rizki@example.com",
      photo: `${process.env.HOST_URL}/ambulance-staffs/staff-3507012201900003.jpg`,
    },
    {
      identity: "3507012201900004",
      name: "Siti Rahayu",
      phone: "081234567893",
      email: "siti.rahayu@example.com",
      photo: `${process.env.HOST_URL}/ambulance-staffs/staff-3507012201900004.jpg`,
    },
    {
      identity: "3507012201900005",
      name: "Eko Prasetyo",
      phone: "081234567894",
      email: "eko.prasetyo@example.com",
      photo: `${process.env.HOST_URL}/ambulance-staffs/staff-3507012201900005.jpg`,
    },
  ];

  // Upsert ambulance staff data
  for (const staff of ambulanceStaffs) {
    await prisma.ambulanceStaff.upsert({
      where: { identity: staff.identity },
      update: staff,
      create: staff,
    });
  }

  console.log(`Seeded ${ambulanceStaffs.length} ambulance staff records`);
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedAmbulanceStaff(simkesPrisma)
    .then(() => {
      console.log("Ambulance staff seeding completed successfully");
      return simkesPrisma.$disconnect();
    })
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error seeding ambulance staff:", error);
      return simkesPrisma.$disconnect().finally(() => {
        process.exit(1);
      });
    });
}
