import { seedAmbulanceStaff } from "./seeders/ambulanceStaff.seeder.js";
import { simkesPrisma, simrsPrisma } from "../src/config/db.js";
import { seedPatients } from "./seeders/patient.seeder.js";
import { seedEmergency } from "./seeders/emergency.seeder.js";
import { seedPosts } from "./seeders/post.seeder.js";
import { seedGalleries } from "./seeders/gallery.seeder.js";

async function main() {
  console.log("🌱 Running all seeders...");

  await seedAmbulanceStaff(simkesPrisma);
  await seedPatients(simrsPrisma);
  await seedEmergency(simkesPrisma, simrsPrisma);
  await seedPosts(simkesPrisma);
  await seedGalleries(simkesPrisma);

  console.log("✅ All seeders executed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await simkesPrisma.$disconnect();
    await simrsPrisma.$disconnect();
  });
