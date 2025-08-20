import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Ambil data detail tempat tidur dengan pagination dan filter
 */
export const getAllBeds = async (query) => {
  const {
    unitName,
    unitId,
    classId,
    roomId,
    bedStatusId,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
  } = query;

  const filters = {
    room: {
      unit: {
        departmentId: { in: [16, 35] },
        isEnabled: true,
        ...(unitName
          ? { unitName: { contains: unitName, mode: "insensitive" } }
          : {}),
        ...(unitId ? { id: Number(unitId) } : {}),
      },
      isEnabled: true,
      ...(classId ? { classId: Number(classId) } : {}),
      ...(roomId ? { id: Number(roomId) } : {}),
    },
    isEnabled: true,
    ...(bedStatusId ? { bedStatusId: Number(bedStatusId) } : {}),
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

  const [results, total] = await Promise.all([
    simrsPrisma.bed.findMany({
      where: filters,
      include: {
        room: {
          include: {
            unit: { include: { department: true } },
            class: true,
          },
        },
        bedStatus: true,
      },
      skip: (page - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.bed.count({ where: filters }),
  ]);

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

/**
 * Ambil data detail tempat tidur berdasarkan ID
 */
export const getBedById = async (id) => {
  const bed = await simrsPrisma.bed.findUnique({
    where: { id: Number(id) },
    include: {
      room: {
        include: {
          unit: { include: { department: true } },
          class: true,
        },
      },
      bedStatus: true,
    },
  });

  if (!bed) {
    throw new ApiError("Bed not found", 404);
  }

  return bed;
};

/**
 * Hitung summary tempat tidur sesuai filter
 */
export const getBedSummary = async (query) => {
  const { unitName, unitId, classId, roomId } = query;

  const filters = {
    isEnabled: true,
    room: {
      is: {
        isEnabled: true,
        ...(classId ? { classId: Number(classId) } : {}),
        ...(roomId ? { id: Number(roomId) } : {}),
        unit: {
          is: {
            departmentId: { in: [16, 35] },
            isEnabled: true,
            ...(unitName
              ? { unitName: { contains: unitName, mode: "insensitive" } }
              : {}),
            ...(unitId ? { id: Number(unitId) } : {}),
          },
        },
      },
    },
  };

  const beds = await simrsPrisma.bed.findMany({
    where: filters,
    select: { bedStatusId: true },
  });

  return {
    total: beds.length,
    occupied: beds.filter((b) => b.bedStatusId === 1).length,
    empty: beds.filter((b) => b.bedStatusId === 2).length,
  };
};

/**
 * Ambil data detail tempat tidur dengan summary
 */
export const getAllRoomWithBeds = async (query) => {
  const {
    unitName,
    classId,
    unitId,
    roomId,
    bedStatusId,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
  } = query;

  const roomFilters = {
    unit: {
      departmentId: { in: [16, 35] },
      isEnabled: true,
      ...(unitName
        ? { unitName: { contains: unitName, mode: "insensitive" } }
        : {}),
      ...(unitId ? { id: Number(unitId) } : {}),
    },
    isEnabled: true,
    ...(classId ? { classId: Number(classId) } : {}),

    // hanya ambil room yang punya bed
    beds: {
      some: {
        isEnabled: true,
        ...(bedStatusId ? { bedStatusId: Number(bedStatusId) } : {}),
      },
    },
    ...(roomId ? { id: Number(roomId) } : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "roomName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [rooms, total] = await Promise.all([
    simrsPrisma.room.findMany({
      where: roomFilters,
      include: {
        unit: { include: { department: true } },
        class: true,
        beds: {
          where: {
            isEnabled: true,
            ...(bedStatusId ? { bedStatusId: Number(bedStatusId) } : {}),
          },
          include: { bedStatus: true },
        },
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.room.count({ where: roomFilters }),
  ]);

  const results = rooms.map((room) => {
    const summary = { empty: 0, occupied: 0 };

    const beds = room.beds.map((bed) => {
      if (bed.bedStatusId === 2) summary.empty++;
      else summary.occupied++;

      return {
        id: bed.id,
        bedNumber: bed.bedNumber,
        displayName: bed.displayName,
        bedStatusId: bed.bedStatus?.id,
        status: bed.bedStatus?.status ?? null,
      };
    });

    return {
      roomId: room.id,
      roomName: room.roomName,
      classId: room.class?.id,
      className: room.class?.className ?? null,
      unitId: room.unit?.id,
      unitName: room.unit?.unitName,
      departmentId: room.unit?.department?.id,
      departmentName: room.unit?.department?.departmentName,
      summary,
      beds,
    };
  });

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

/**
 * Ambil detail 1 kamar beserta tempat tidurnya + summary
 */
export const getRoomWithBedsById = async (id) => {
  const room = await simrsPrisma.room.findUnique({
    where: { id: Number(id), isEnabled: true },
    include: {
      unit: { include: { department: true } },
      class: true,
      beds: {
        where: { isEnabled: true },
        include: { bedStatus: true },
      },
    },
  });

  if (!room) {
    throw new ApiError("Room not found", 404);
  }

  const summary = { empty: 0, occupied: 0 };

  const beds = room.beds.map((bed) => {
    if (bed.bedStatusId === 2) summary.empty++;
    else summary.occupied++;

    return {
      id: bed.id,
      bedNumber: bed.bedNumber,
      displayName: bed.displayName,
      bedStatusId: bed.bedStatus?.id,
      status: bed.bedStatus?.status ?? null,
    };
  });

  return {
    roomId: room.id,
    roomName: room.roomName,
    classId: room.class?.id,
    className: room.class?.className ?? null,
    unitId: room.unit?.id,
    unitName: room.unit?.unitName,
    departmentId: room.unit?.department?.id,
    departmentName: room.unit?.department?.departmentName,
    summary,
    beds,
  };
};

/**
 * Ambil data status tempat tidur
 */
export const getAllBedStatus = async (query) => {
  const { status, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    isEnabled: true,
    ...(status ? { status: { contains: status, mode: "insensitive" } } : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "status"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allStatus, total] = await Promise.all([
    simrsPrisma.bedStatus.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.bedStatus.count({
      where: filters,
    }),
  ]);

  return {
    results: allStatus,
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
export const getAllClass = async (query) => {
  const { className, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    isEnabled: true,
    ...(className
      ? { className: { contains: className, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "className"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allClass, total] = await Promise.all([
    simrsPrisma.class.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.class.count({
      where: filters,
    }),
  ]);

  return {
    results: allClass,
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
export const getAllRoom = async (query) => {
  const { roomName, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    isEnabled: true,
    ...(roomName
      ? { roomName: { contains: roomName, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "roomName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allRoom, total] = await Promise.all([
    simrsPrisma.room.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.room.count({
      where: filters,
    }),
  ]);

  return {
    results: allRoom,
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
export const getAllUnit = async (query) => {
  const { unitName, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    isEnabled: true,
    ...(unitName
      ? { unitName: { contains: unitName, mode: "insensitive" } }
      : {}),
  };

  const orderBy = {};
  if (sortBy && ["id", "unitName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [allUnit, total] = await Promise.all([
    simrsPrisma.unit.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.unit.count({
      where: filters,
    }),
  ]);

  return {
    results: allUnit,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};
