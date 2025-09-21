import { fileURLToPath } from "url";
import { simkesPrisma } from "../../src/config/db.js";

/**
 * Seed data untuk nurses
 * @param {Object} prisma - Prisma client instance
 */
export const seedNurses = async (prisma = simkesPrisma) => {
  console.log("Seeding nurses...");

  // Hapus data nurses yang ada
  await prisma.nurse.deleteMany({});

  // Data dummy untuk nurses
  const nurses = [
    {
      name: "Siti Nurhaliza",
      speciality: "Perawat Umum",
      description: "Perawat umum dengan pengalaman 5 tahun di berbagai unit rumah sakit. Ahli dalam perawatan pasien dewasa dan lansia.",
      photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Budi Santoso",
      speciality: "Perawat Bedah",
      description: "Perawat bedah dengan keahlian dalam persiapan operasi dan perawatan pasca operasi. Berpengalaman dalam berbagai jenis operasi.",
      photoUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Dewi Lestari",
      speciality: "Perawat Anak",
      description: "Perawat anak dengan pendekatan yang lembut dan sabar. Ahli dalam menangani pasien anak dari bayi hingga remaja.",
      photoUrl: "https://images.unsplash.com/photo-1584516150877-200d1c7ccf84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Ahmad Rizki",
      speciality: "Perawat ICU",
      description: "Perawat ICU dengan keahlian dalam perawatan kritis. Berpengalaman menangani pasien dengan kondisi kritis dan memerlukan pemantauan intensif.",
      photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Rina Wijaya",
      speciality: "Perawat Geriatri",
      description: "Perawat geriatri dengan fokus pada perawatan lansia. Memiliki pemahaman mendalam tentang kebutuhan khusus pasien lanjut usia.",
      photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Doni Pratama",
      speciality: "Perawat Gawat Darurat",
      description: "Perawat gawat darurat dengan kemampuan bertindak cepat dalam situasi kritis. Ahli dalam penanganan pertama pada kondisi darurat.",
      photoUrl: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Maya Indah",
      speciality: "Perawat Maternitas",
      description: "Perawat maternitas dengan keahlian dalam perawatan ibu hamil, melahirkan, dan pasca melahirkan. Berpengalaman dalam mendampingi proses persalinan.",
      photoUrl: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: false
    },
    {
      name: "Rudi Hartono",
      speciality: "Perawat Jiwa",
      description: "Perawat jiwa dengan pendekatan yang empatik dan suportif. Ahli dalam menangani pasien dengan gangguan kesehatan mental.",
      photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Anita Sari",
      speciality: "Perawat Onkologi",
      description: "Perawat onkologi dengan keahlian dalam perawatan pasien kanker. Berpengalaman dalam administrasi kemoterapi dan perawatan paliatif.",
      photoUrl: "https://images.unsplash.com/photo-1571772996211-2f02974a9f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      name: "Hendra Gunawan",
      speciality: "Perawat Rehabilitasi",
      description: "Perawat rehabilitasi dengan fokus pada pemulihan pasien pasca stroke dan cedera. Ahli dalam terapi fisik dan okupasi.",
      photoUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    }
  ];

  // Masukkan data nurses ke database
  for (const nurse of nurses) {
    await prisma.nurse.create({
      data: nurse
    });
  }

  console.log(`${nurses.length} nurses berhasil ditambahkan`);
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedNurses(simkesPrisma)
    .then(() => {
      console.log("Nurse seeding completed successfully!");
      return simkesPrisma.$disconnect();
    })
    .catch((error) => {
      console.error("Error seeding nurses:", error);
      return simkesPrisma.$disconnect();
    });
}