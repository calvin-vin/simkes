import { fileURLToPath } from "url";
import { simkesPrisma } from "../../src/config/db.js";

/**
 * Seed data untuk nurses dan nurse schedules
 * @param {Object} prisma - Prisma client instance
 */
export const seedNurses = async (prisma = simkesPrisma) => {
  console.log("Seeding nurses...");

  // Hapus data nurse schedules dan nurses yang ada
  await prisma.nurseSchedule.deleteMany({});
  await prisma.nurse.deleteMany({});

  // Data dummy untuk nurses
  const nurses = [
    {
      name: "Siti Nurhaliza",
      speciality: "Perawat Umum",
      description:
        "Perawat umum dengan pengalaman 5 tahun di berbagai unit rumah sakit. Ahli dalam perawatan pasien dewasa dan lansia.",
      photoUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Budi Santoso",
      speciality: "Perawat Bedah",
      description:
        "Perawat bedah dengan keahlian dalam persiapan operasi dan perawatan pasca operasi. Berpengalaman dalam berbagai jenis operasi.",
      photoUrl:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Dewi Lestari",
      speciality: "Perawat Anak",
      description:
        "Perawat anak dengan pendekatan yang lembut dan sabar. Ahli dalam menangani pasien anak dari bayi hingga remaja.",
      photoUrl:
        "https://images.unsplash.com/photo-1584516150877-200d1c7ccf84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Ahmad Rizki",
      speciality: "Perawat ICU",
      description:
        "Perawat ICU dengan keahlian dalam perawatan kritis. Berpengalaman menangani pasien dengan kondisi kritis dan memerlukan pemantauan intensif.",
      photoUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Rina Wijaya",
      speciality: "Perawat Geriatri",
      description:
        "Perawat geriatri dengan fokus pada perawatan lansia. Memiliki pemahaman mendalam tentang kebutuhan khusus pasien lanjut usia.",
      photoUrl:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Doni Pratama",
      speciality: "Perawat Gawat Darurat",
      description:
        "Perawat gawat darurat dengan kemampuan bertindak cepat dalam situasi kritis. Ahli dalam penanganan pertama pada kondisi darurat.",
      photoUrl:
        "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Maya Indah",
      speciality: "Perawat Maternitas",
      description:
        "Perawat maternitas dengan keahlian dalam perawatan ibu hamil, melahirkan, dan pasca melahirkan. Berpengalaman dalam mendampingi proses persalinan.",
      photoUrl:
        "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: false,
    },
    {
      name: "Rudi Hartono",
      speciality: "Perawat Jiwa",
      description:
        "Perawat jiwa dengan pendekatan yang empatik dan suportif. Ahli dalam menangani pasien dengan gangguan kesehatan mental.",
      photoUrl:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Anita Sari",
      speciality: "Perawat Onkologi",
      description:
        "Perawat onkologi dengan keahlian dalam perawatan pasien kanker. Berpengalaman dalam administrasi kemoterapi dan perawatan paliatif.",
      photoUrl:
        "https://images.unsplash.com/photo-1571772996211-2f02974a9f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
    {
      name: "Hendra Gunawan",
      speciality: "Perawat Rehabilitasi",
      description:
        "Perawat rehabilitasi dengan fokus pada pemulihan pasien pasca stroke dan cedera. Ahli dalam terapi fisik dan okupasi.",
      photoUrl:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true,
    },
  ];

  // Masukkan data nurses ke database dan buat jadwal untuk setiap nurse
  const createdNurses = [];
  for (const nurse of nurses) {
    const createdNurse = await prisma.nurse.create({
      data: nurse,
    });
    createdNurses.push(createdNurse);
  }

  console.log(`${nurses.length} nurses berhasil ditambahkan`);

  // Seed data untuk nurse schedules
  console.log("Seeding nurse schedules...");

  // Buat jadwal untuk setiap nurse
  let totalSchedules = 0;
  for (const nurse of createdNurses) {
    // Hanya buat jadwal untuk nurse yang aktif
    if (nurse.isActive) {
      // Buat jadwal untuk hari kerja (Senin-Jumat)
      for (let dayOfWeek = 1; dayOfWeek <= 5; dayOfWeek++) {
        // Jadwal pagi (08:00 - 12:00)
        await prisma.nurseSchedule.create({
          data: {
            nurseId: nurse.id,
            dayOfWeek,
            startTime: "08:00",
            endTime: "12:00",
            isActive: true,
          },
        });

        // Jadwal sore (13:00 - 17:00)
        await prisma.nurseSchedule.create({
          data: {
            nurseId: nurse.id,
            dayOfWeek,
            startTime: "13:00",
            endTime: "17:00",
            isActive: true,
          },
        });

        totalSchedules += 2;
      }

      // Beberapa nurse juga bekerja di hari Sabtu (setengah hari)
      if (
        ["Perawat Umum", "Perawat Anak", "Perawat Gawat Darurat"].includes(
          nurse.speciality
        )
      ) {
        await prisma.nurseSchedule.create({
          data: {
            nurseId: nurse.id,
            dayOfWeek: 6, // Sabtu
            startTime: "08:00",
            endTime: "12:00",
            isActive: true,
          },
        });

        totalSchedules += 1;
      }
    }
  }

  console.log(`${totalSchedules} jadwal perawat berhasil ditambahkan`);
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
