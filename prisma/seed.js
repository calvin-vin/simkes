import { seedAmbulanceStaff } from "./seeders/ambulanceStaff.seeder.js";
import { simkesPrisma } from "../src/config/db.js";

async function main() {
  console.log("🌱 Running all seeders...");

  await seedAmbulanceStaff(simkesPrisma);

  console.log("✅ All seeders executed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await simkesPrisma.$disconnect();
  });
