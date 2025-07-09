export default async function medicalCategorySeeder(prisma) {
  console.log("🌱 Seeding medical categories...");

  const categories = [
    { externalId: "simrs-medcat-001", name: "Poli Umum" },
    { externalId: "simrs-medcat-002", name: "Poli Anak" },
    { externalId: "simrs-medcat-003", name: "Poli Jantung" },
    { externalId: "simrs-medcat-004", name: "Poli Gigi" },
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
