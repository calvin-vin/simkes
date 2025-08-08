export default async function medicalCategorySeeder(prisma) {
  console.log("🌱 Seeding medical categories...");

  const categories = [
    {
      id: "70980045-3a47-4ee0-be2b-65f9d57f3e3b",
      externalId: "simrs-medcat-001",
      name: "Poli Umum",
    },
    {
      id: "0311afcc-c1f7-4aab-8510-f1e49f21944c",
      externalId: "simrs-medcat-002",
      name: "Poli Anak",
    },
    {
      id: "3af5e87c-9950-4a56-8754-5ed2b5ae6e5c",
      externalId: "simrs-medcat-003",
      name: "Poli Jantung",
    },
    {
      id: "793735a8-d762-4d51-a71e-0de69b55c180",
      externalId: "simrs-medcat-004",
      name: "Poli Gigi",
    },
  ];

  for (const cat of categories) {
    await prisma.medicalCategory.upsert({
      where: { externalId: cat.externalId },
      update: {},
      create: cat,
    });
  }

  console.log("✅ Medical categories seeder completed");
}
