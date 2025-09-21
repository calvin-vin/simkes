import { fileURLToPath } from "url";
import { simkesPrisma } from "../../src/config/db.js";

/**
 * Seed data untuk facilities dan facility photos
 * @param {Object} prisma - Prisma client instance
 */
export const seedFacilities = async (prisma = simkesPrisma) => {
  console.log("Seeding facilities...");

  // Hapus data facility photos dan facilities yang ada
  await prisma.facilityPhoto.deleteMany({});
  await prisma.facility.deleteMany({});

  // Data dummy untuk facilities
  const facilities = [
    {
      name: "Ruang Operasi Modern",
      description: "Ruang operasi dengan peralatan medis terbaru dan steril untuk berbagai jenis operasi. Dilengkapi dengan sistem ventilasi khusus dan pencahayaan yang optimal.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1579684453377-1e4a9015f6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Laboratorium Terpadu",
      description: "Laboratorium lengkap untuk pemeriksaan darah, urin, dan berbagai tes diagnostik lainnya. Menggunakan peralatan otomatis dengan akurasi tinggi.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1581093196277-9f6e9b96cc00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Radiologi",
      description: "Ruang radiologi dengan peralatan X-ray, CT Scan, dan MRI terbaru. Dilengkapi dengan sistem perlindungan radiasi untuk keamanan pasien dan staf.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Rawat Inap VIP",
      description: "Ruang rawat inap VIP dengan fasilitas premium seperti tempat tidur elektrik, TV, AC, kamar mandi dalam, dan sofa untuk keluarga pasien.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Fisioterapi",
      description: "Ruang fisioterapi dengan berbagai peralatan untuk rehabilitasi fisik. Dilengkapi dengan kolam terapi, alat latihan, dan ruang konsultasi.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Hemodialisis",
      description: "Ruang hemodialisis dengan mesin dialisis modern untuk pasien gagal ginjal. Dilengkapi dengan kursi yang nyaman dan sistem pemantauan pasien.",
      isActive: false,
      photos: [
        "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Bersalin",
      description: "Ruang bersalin yang nyaman dan steril untuk proses persalinan normal. Dilengkapi dengan peralatan pemantauan ibu dan bayi.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1632053001332-2cf3337fa9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang ICU",
      description: "Ruang ICU dengan peralatan pemantauan vital sign dan ventilator untuk pasien kritis. Dilengkapi dengan sistem alarm dan staf medis 24 jam.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Ruang Endoskopi",
      description: "Ruang endoskopi untuk prosedur diagnostik dan terapeutik pada saluran pencernaan. Dilengkapi dengan peralatan endoskopi terbaru.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      name: "Apotek",
      description: "Apotek dengan berbagai jenis obat dan alat kesehatan. Dilayani oleh apoteker berpengalaman dan sistem manajemen obat terkomputerisasi.",
      isActive: true,
      photos: [
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    }
  ];

  // Masukkan data facilities dan photos ke database
  let totalPhotos = 0;
  for (const facility of facilities) {
    const { photos, ...facilityData } = facility;
    
    // Buat facility
    const createdFacility = await prisma.facility.create({
      data: facilityData
    });
    
    // Buat facility photos
    if (photos && photos.length > 0) {
      for (const photoUrl of photos) {
        await prisma.facilityPhoto.create({
          data: {
            facilityId: createdFacility.id,
            photoUrl
          }
        });
        totalPhotos++;
      }
    }
  }

  console.log(`Berhasil menambahkan ${facilities.length} fasilitas dan ${totalPhotos} foto fasilitas`);
};

// Jalankan seeder jika file ini dieksekusi langsung
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedFacilities()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await simkesPrisma.$disconnect();
    });
}