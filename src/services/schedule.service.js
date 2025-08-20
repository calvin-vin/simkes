import { simrsPrisma } from "../lib/simrsPrisma.js";

export function getHariIni() {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[new Date().getDay()];
}

export const getJadwalDokter = async (query) => {
  const {
    dokterId,
    ruanganId,
    nik,
    nostr,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
  } = query;

  const filters = {
    statusenabled: true,
    ...(dokterId ? { objectpegawaifk: Number(dokterId) } : {}),
    ...(ruanganId ? { objectruanganfk: Number(ruanganId) } : {}),
    ...(nik ? { pegawai_m: { noidentitas: nik } } : {}),
    ...(nostr ? { pegawai_m: { nostr } } : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "namalengkap"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["pegawai_m"] = { namalengkap: "asc" };
  }

  const [jadwal, total] = await Promise.all([
    simrsPrisma.jadwaldokter_m.findMany({
      where: filters,
      include: {
        ruangan_m: { select: { id: true, namaruangan: true } },
        pegawai_m: {
          select: {
            id: true,
            namalengkap: true,
            nosip: true,
            nostr: true,
            noidentitas: true,
          },
        },
      },
      skip: (page - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.jadwaldokter_m.count({ where: filters }),
  ]);

  // filter berdasarkan hari ini
  const hariIni = getHariIni();
  const filtered = jadwal.filter((j) =>
    j.hari
      .split(",")
      .map((h) => h.trim().toUpperCase())
      .includes(hariIni.toUpperCase())
  );

  const results = filtered.map((j) => ({
    idjadwalpegawai: j.id,
    objectruanganfk: j.ruangan_m.id,
    namaruangan: j.ruangan_m.namaruangan,
    objectpegawaifk: j.pegawai_m.id,
    namalengkap: j.pegawai_m.namalengkap,
    nosip: j.pegawai_m.nosip,
    nostr: j.pegawai_m.nostr,
    nik: j.pegawai_m.noidentitas,
    jammulai: j.jammulai,
    jamakhir: j.jamakhir,
    keterangan: j.keterangan,
    hari: j.hari,
  }));

  return {
    results,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};
