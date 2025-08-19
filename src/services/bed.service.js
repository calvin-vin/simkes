import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Ambil data detail tempat tidur dengan pagination dan filter
 */
export const getKetersediaanTempatTidur = async (query) => {
  const {
    namaruangan,
    idruangan,
    idkelas,
    idkamar,
    idstatusbed,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
  } = query;

  const filters = {
    kamar: {
      ruangan: {
        objectdepartemenfk: { in: [16, 35] },
        statusenabled: true,
        ...(namaruangan
          ? { namaruangan: { contains: namaruangan, mode: "insensitive" } }
          : {}),
        ...(idruangan ? { id: Number(idruangan) } : {}),
      },
      statusenabled: true,
      ...(idkelas ? { objectkelasfk: Number(idkelas) } : {}),
      ...(idkamar ? { id: Number(idkamar) } : {}),
    },
    statusenabled: true,
    ...(idstatusbed ? { objectstatusbedfk: Number(idstatusbed) } : {}),
  };

  const orderBy = {};
  if (sortBy && ["id"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [beds, total] = await Promise.all([
    simrsPrisma.tempatTidur.findMany({
      where: filters,
      include: {
        kamar: {
          include: {
            ruangan: {
              include: {
                departemen: true,
              },
            },
            kelas: true,
          },
        },
        status: true,
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.tempatTidur.count({
      where: filters,
    }),
  ]);

  return {
    results: beds,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil data detail tempat tidur berdasarkan ID
 */
export const getKetersediaanTempatTidurById = async (id) => {
  const bed = await simrsPrisma.tempatTidur.findUnique({
    where: { id: Number(id) },
    include: {
      kamar: {
        include: {
          ruangan: {
            include: {
              departemen: true,
            },
          },
          kelas: true,
        },
      },
      status: true,
    },
  });

  if (!bed) {
    throw new ApiError("Tempat tidur tidak ditemukan", 404);
  }

  return bed;
};

/**
 * Hitung summary tempat tidur sesuai filter
 */
export const getSummaryTempatTidur = async (query) => {
  const { namaruangan, idruangan, idkelas, idkamar } = query;

  const filters = {
    kamar: {
      ruangan: {
        objectdepartemenfk: { in: [16, 35] },
        statusenabled: true,
        ...(namaruangan
          ? { namaruangan: { contains: namaruangan, mode: "insensitive" } }
          : {}),
        ...(idruangan ? { id: Number(idruangan) } : {}),
      },
      statusenabled: true,
      ...(idkelas ? { objectkelasfk: Number(idkelas) } : {}),
      ...(idkamar ? { id: Number(idkamar) } : {}),
    },
    statusenabled: true,
  };

  const beds = await simrsPrisma.tempatTidur.findMany({
    where: filters,
    select: { objectstatusbedfk: true },
  });

  return {
    kamartotal: beds.length,
    kamarisi: beds.filter((b) => b.objectstatusbedfk === 1).length,
    kamarkosong: beds.filter((b) => b.objectstatusbedfk === 2).length,
  };
};

/**
 * Ambil data detail tempat tidur dengan summary
 */
export const getKamarwithTempatTidur = async (query) => {
  const {
    namaruangan,
    idkelas,
    idruangan,
    idkamar,
    idstatusbed,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
  } = query;

  const kamarFilters = {
    ruangan: {
      objectdepartemenfk: { in: [16, 35] },
      statusenabled: true,
      ...(namaruangan
        ? { namaruangan: { contains: namaruangan, mode: "insensitive" } }
        : {}),
      ...(idruangan ? { id: Number(idruangan) } : {}),
    },
    statusenabled: true,
    ...(idkelas ? { objectkelasfk: Number(idkelas) } : {}),

    // Hanya kamar yang punya tempat tidur
    tempatTidur: {
      some: {
        statusenabled: true,
        ...(idstatusbed ? { objectstatusbedfk: Number(idstatusbed) } : {}),
      },
    },
    ...(idkamar ? { id: Number(idkamar) } : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "namakamar"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [kamars, total] = await Promise.all([
    simrsPrisma.kamar.findMany({
      where: kamarFilters,
      include: {
        ruangan: { include: { departemen: true } },
        kelas: true,
        tempatTidur: {
          where: {
            statusenabled: true,
            ...(idstatusbed ? { objectstatusbedfk: Number(idstatusbed) } : {}),
          },
          include: { status: true },
        },
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.kamar.count({ where: kamarFilters }),
  ]);

  const results = kamars.map((kamar) => {
    const summary = { kosong: 0, terisi: 0 };

    const tempatTidur = kamar.tempatTidur.map((bed) => {
      if (bed.objectstatusbedfk === 2) summary.kosong++;
      else summary.terisi++;

      return {
        id: bed.id,
        nomor: bed.nomorbed,
        display: bed.reportdisplay,
        idstatusbed: bed.status?.id,
        statusbed: bed.status?.statusbed ?? null,
      };
    });

    return {
      idkamar: kamar.id,
      namakamar: kamar.namakamar,
      idkelas: kamar.kelas?.id,
      namakelas: kamar.kelas?.namakelas ?? null,
      idruangan: kamar.ruangan?.id,
      namaruangan: kamar.ruangan?.namaruangan,
      iddepartemen: kamar.ruangan?.departemen?.id,
      namadepartemen: kamar.ruangan?.departemen?.namadepartemen,
      summary,
      tempatTidur,
    };
  });

  return {
    results,
    pagination: {
      total, // total kamar
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil detail 1 kamar beserta tempat tidurnya + summary
 */
export const getKamarwithTempatTidurById = async (id) => {
  const kamar = await simrsPrisma.kamar.findUnique({
    where: { id: Number(id), statusenabled: true },
    include: {
      ruangan: { include: { departemen: true } },
      kelas: true,
      tempatTidur: {
        where: {
          statusenabled: true,
        },
        include: { status: true },
      },
    },
  });

  if (!kamar) {
    throw new ApiError("Kamar tidak ditemukan", 404);
  }

  const summary = { kosong: 0, terisi: 0 };

  const tempatTidur = kamar.tempatTidur.map((bed) => {
    if (bed.objectstatusbedfk === 2) summary.kosong++;
    else summary.terisi++;

    return {
      id: bed.id,
      nomor: bed.nomorbed,
      display: bed.reportdisplay,
      idstatusbed: bed.status?.id,
      statusbed: bed.status?.statusbed ?? null,
    };
  });

  return {
    idkamar: kamar.id,
    namakamar: kamar.namakamar,
    idkelas: kamar.kelas?.id,
    namakelas: kamar.kelas?.namakelas ?? null,
    idruangan: kamar.ruangan?.id,
    namaruangan: kamar.ruangan?.namaruangan,
    iddepartemen: kamar.ruangan?.departemen?.id,
    namadepartemen: kamar.ruangan?.departemen?.namadepartemen,
    summary,
    tempatTidur,
  };
};

/**
 * Ambil data status tempat tidur
 */
export const getAllStatusBed = async (query) => {
  const { statusbed, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    statusenabled: true,
    ...(statusbed
      ? { statusbed: { contains: statusbed, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "statusbed"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [statusBeds, total] = await Promise.all([
    simrsPrisma.statusBed.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.statusBed.count({
      where: filters,
    }),
  ]);

  return {
    results: statusBeds,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil data kelas tempat tidur
 */
export const getAllKelas = async (query) => {
  const { namakelas, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    statusenabled: true,
    ...(namakelas
      ? { namakelas: { contains: namakelas, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "namakelas"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allKelas, total] = await Promise.all([
    simrsPrisma.kelas.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.kelas.count({
      where: filters,
    }),
  ]);

  return {
    results: allKelas,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil data kamar tempat tidur
 */
export const getAllKamar = async (query) => {
  const { namakamar, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    statusenabled: true,
    ...(namakamar
      ? { namakamar: { contains: namakamar, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "namakamar"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allKamar, total] = await Promise.all([
    simrsPrisma.kamar.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.kamar.count({
      where: filters,
    }),
  ]);

  return {
    results: allKamar,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil data ruangan tempat tidur
 */
export const getAllRuangan = async (query) => {
  const { namaruangan, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    statusenabled: true,
    ...(namaruangan
      ? { namaruangan: { contains: namaruangan, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "namaruangan"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allRuangan, total] = await Promise.all([
    simrsPrisma.ruangan.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.ruangan.count({
      where: filters,
    }),
  ]);

  return {
    results: allRuangan,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};
