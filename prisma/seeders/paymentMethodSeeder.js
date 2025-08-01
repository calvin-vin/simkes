export default async function paymentMethodSeeder(prisma) {
  console.log("🌱 Seeding payment methods...");

  const paymentMethods = [
    {
      id: "640c550d-d74b-4478-bc5e-ce2116856bc2",
      name: "BPJS Kesehatan",
    },
    {
      id: "6cb3c83b-5135-4b0c-a446-58874125df1d",
      name: "Mandiri Inhealth",
    },
    {
      id: "651b77d2-28d8-48f0-90cf-75556d4e9074",
      name: "Umum",
    },
  ];

  for (const payment of paymentMethods) {
    await prisma.paymentMethod.upsert({
      where: { name: payment.name },
      update: {},
      create: payment,
    });
  }

  console.log("✅ Payment methods seeder completed");
}
