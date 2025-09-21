import { fileURLToPath } from "url";
import { simkesPrisma } from "../../src/config/db.js";

/**
 * Seed data untuk posts
 * @param {Object} prisma - Prisma client instance
 */
export const seedPosts = async (prisma = simkesPrisma) => {
  console.log("Seeding posts...");

  // Hapus data posts yang ada (opsional)
  await prisma.post.deleteMany({});

  // Data dummy untuk posts
  const posts = [
    {
      title: "Pentingnya Vaksinasi COVID-19",
      content: "Vaksinasi COVID-19 sangat penting untuk mencegah penyebaran virus dan melindungi diri sendiri serta orang lain. Vaksin telah terbukti efektif dalam mengurangi risiko infeksi berat dan rawat inap. Mari kita bersama-sama mendukung program vaksinasi untuk mencapai kekebalan kelompok.",
      authorId: "admin-1",
      authorName: "Admin Kesehatan",
      photoUrl: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Tips Menjaga Kesehatan Jantung",
      content: "Jantung adalah organ vital yang perlu dijaga kesehatannya. Beberapa cara menjaga kesehatan jantung antara lain: olahraga teratur, konsumsi makanan sehat, hindari merokok, kelola stres dengan baik, dan lakukan pemeriksaan kesehatan rutin. Dengan menjaga kesehatan jantung, kita dapat mencegah berbagai penyakit kardiovaskular.",
      authorId: "admin-2",
      authorName: "Dr. Jantung Sehat",
      photoUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Manfaat Donor Darah",
      content: "Donor darah tidak hanya bermanfaat bagi penerima, tetapi juga bagi pendonor. Beberapa manfaat donor darah antara lain: membantu orang yang membutuhkan, mendeteksi penyakit sejak dini, memperbaharui sel darah, dan mengurangi risiko penyakit jantung. Mari rutin donor darah untuk kesehatan diri dan sesama.",
      authorId: "admin-1",
      authorName: "Admin Kesehatan",
      photoUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Pentingnya Kesehatan Mental",
      content: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Beberapa cara menjaga kesehatan mental antara lain: istirahat cukup, olahraga teratur, mengelola stres, bersosialisasi, dan mencari bantuan profesional jika diperlukan. Jangan ragu untuk berbicara tentang masalah kesehatan mental dan mencari dukungan.",
      authorId: "admin-3",
      authorName: "Psikolog Sehat",
      photoUrl: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Gizi Seimbang untuk Anak",
      content: "Gizi seimbang sangat penting untuk pertumbuhan dan perkembangan anak. Pastikan anak mendapatkan karbohidrat, protein, lemak, vitamin, dan mineral dalam jumlah yang cukup. Berikan makanan bervariasi dan batasi konsumsi makanan cepat saji serta minuman manis. Ajarkan pola makan sehat sejak dini.",
      authorId: "admin-2",
      authorName: "Dr. Jantung Sehat",
      photoUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Pencegahan Diabetes",
      content: "Diabetes adalah penyakit kronis yang dapat dicegah dengan pola hidup sehat. Beberapa cara mencegah diabetes antara lain: menjaga berat badan ideal, olahraga teratur, konsumsi makanan sehat, hindari gula berlebih, dan lakukan pemeriksaan gula darah rutin. Cegah diabetes sejak dini untuk kualitas hidup yang lebih baik.",
      authorId: "admin-1",
      authorName: "Admin Kesehatan",
      photoUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: false
    },
    {
      title: "Manfaat Olahraga Teratur",
      content: "Olahraga teratur memberikan banyak manfaat bagi kesehatan, seperti menjaga berat badan, meningkatkan kesehatan jantung, memperkuat otot dan tulang, meningkatkan kualitas tidur, dan mengurangi stres. Lakukan olahraga minimal 30 menit sehari, 5 kali seminggu untuk hasil optimal.",
      authorId: "admin-3",
      authorName: "Psikolog Sehat",
      photoUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Pentingnya Imunisasi untuk Anak",
      content: "Imunisasi adalah cara efektif untuk melindungi anak dari berbagai penyakit berbahaya. Pastikan anak mendapatkan imunisasi lengkap sesuai jadwal yang direkomendasikan. Imunisasi tidak hanya melindungi anak Anda, tetapi juga membantu mencegah penyebaran penyakit di masyarakat.",
      authorId: "admin-2",
      authorName: "Dr. Jantung Sehat",
      photoUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Cara Mencegah Hipertensi",
      content: "Hipertensi atau tekanan darah tinggi dapat dicegah dengan pola hidup sehat. Beberapa cara mencegah hipertensi antara lain: kurangi konsumsi garam, perbanyak konsumsi buah dan sayur, olahraga teratur, hindari merokok dan alkohol, serta kelola stres dengan baik. Jaga tekanan darah Anda untuk kesehatan jangka panjang.",
      authorId: "admin-1",
      authorName: "Admin Kesehatan",
      photoUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    },
    {
      title: "Pentingnya Tidur Berkualitas",
      content: "Tidur berkualitas sangat penting untuk kesehatan fisik dan mental. Kurang tidur dapat menyebabkan berbagai masalah kesehatan, seperti obesitas, diabetes, penyakit jantung, dan gangguan mood. Usahakan tidur 7-8 jam setiap malam dan ciptakan rutinitas tidur yang baik untuk kualitas tidur optimal.",
      authorId: "admin-3",
      authorName: "Psikolog Sehat",
      photoUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isActive: true
    }
  ];

  // Masukkan data posts ke database
  for (const post of posts) {
    await prisma.post.create({
      data: post
    });
  }

  console.log(`${posts.length} posts berhasil ditambahkan`);
};

// Jika file ini dijalankan langsung (bukan di-import)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedPosts(simkesPrisma)
    .then(() => {
      console.log("Post seeding completed successfully!");
      return simkesPrisma.$disconnect();
    })
    .catch((error) => {
      console.error("Error seeding posts:", error);
      return simkesPrisma.$disconnect();
    });
}