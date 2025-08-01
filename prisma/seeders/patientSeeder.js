export default async function patientSeeder(prisma) {
  console.log("🌱 Seeding patients...");

  const patients = [
    {
      id: "11111111-1111-1111-1111-111111111111",
      externalId: "nik-3172010101010001",
      name: "John Doe",
      nik: "3172010101010001",
      bpjsNumber: "0001112223334",
      phone: "081234567890",
    },
    {
      id: "22222222-2222-2222-2222-222222222222",
      externalId: "nik-3172010101010002",
      name: "Jane Smith",
      nik: "3172010101010002",
      bpjsNumber: "0002223334445",
      phone: "081298765432",
    },
  ];

  for (const patient of patients) {
    await prisma.patient.upsert({
      where: { externalId: patient.externalId },
      update: {},
      create: patient,
    });
  }

  console.log("✅ Patients seeder completed");
}
