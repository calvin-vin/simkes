import { fileURLToPath } from "url";
import { simrsPrisma } from "../../src/config/db.js";

export const seedPatients = async (prisma) => {
  console.log("Seeding patients...");

  // Data gender untuk referensi
  // 1: Laki-laki, 2: Perempuan
  // Pastikan ID gender sesuai dengan data di database
  const genderMaleId = 1;
  const genderFemaleId = 2;

  const patients = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      identity: "3507012201900010",
      genderId: genderMaleId,
      birthPlace: "Jakarta",
      birthDate: new Date("1990-01-22"),
      motherName: "Siti Aminah",
      fatherName: "Budi Santoso",
      spouseName: "Dewi Lestari",
      bpjsNumber: "0001234567890",
      phoneNumber: "081234567890",
      registeredAt: new Date(),
      homeAddress: "Jl. Merdeka No. 10, Jakarta Pusat",
      isSimkes: true,
      isEnabled: true,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      identity: "3507012201900011",
      genderId: genderFemaleId,
      birthPlace: "Bandung",
      birthDate: new Date("1992-05-15"),
      motherName: "Ratna Sari",
      fatherName: "Hendra Wijaya",
      bpjsNumber: "0001234567891",
      phoneNumber: "081234567891",
      registeredAt: new Date(),
      homeAddress: "Jl. Pahlawan No. 15, Bandung",
      isSimkes: true,
      isEnabled: true,
    },
    {
      id: 3,
      name: "Budi Santoso",
      identity: "3507012201900012",
      genderId: genderMaleId,
      birthPlace: "Surabaya",
      birthDate: new Date("1985-08-10"),
      motherName: "Wati Susanti",
      fatherName: "Agus Salim",
      spouseName: "Rina Wati",
      bpjsNumber: "0001234567892",
      phoneNumber: "081234567892",
      registeredAt: new Date(),
      homeAddress: "Jl. Diponegoro No. 25, Surabaya",
      isSimkes: true,
      isEnabled: true,
    },
    {
      id: 4,
      name: "Dewi Lestari",
      identity: "3507012201900013",
      genderId: genderFemaleId,
      birthPlace: "Yogyakarta",
      birthDate: new Date("1995-03-20"),
      motherName: "Sri Wahyuni",
      fatherName: "Bambang Sutrisno",
      phoneNumber: "081234567893",
      registeredAt: new Date(),
      homeAddress: "Jl. Malioboro No. 30, Yogyakarta",
      isSimkes: true,
      isEnabled: true,
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      identity: "3507012201900014",
      genderId: genderMaleId,
      birthPlace: "Semarang",
      birthDate: new Date("1988-11-05"),
      motherName: "Yuni Astuti",
      fatherName: "Darmawan",
      spouseName: "Lina Susanti",
      bpjsNumber: "0001234567894",
      phoneNumber: "081234567894",
      registeredAt: new Date(),
      homeAddress: "Jl. Pemuda No. 45, Semarang",
      isSimkes: true,
      isEnabled: true,
    },
  ];

  // Upsert patient data
  for (const patient of patients) {
    await prisma.patient.upsert({
      where: { id: patient.id },
      update: patient,
      create: patient,
    });
  }

  console.log(`${patients.length} patients seeded successfully!`);
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedPatients(simrsPrisma)
    .then(() => {
      console.log("Patient seeding completed successfully!");
      return simrsPrisma.$disconnect();
    })
    .catch((error) => {
      console.error("Error seeding patients:", error);
      return simrsPrisma.$disconnect();
    });
}
