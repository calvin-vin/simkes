import { PrismaClient } from "@prisma/client";
import medicalCategorySeeder from "./seeders/medicalCategorySeeder.js";
import doctorSeeder from "./seeders/doctorSeeder.js";
import patientSeeder from "./seeders/patientSeeder.js";
import reservationSeeder from "./seeders/reservationSeeder.js";
import paymentMethodSeeder from "./seeders/paymentMethodSeeder.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Running seeders...");

  // await medicalCategorySeeder(prisma);
  // await doctorSeeder(prisma);
  // await patientSeeder(prisma);
  // await reservationSeeder(prisma);
  await paymentMethodSeeder(prisma);

  console.log("✅ All seeders executed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
