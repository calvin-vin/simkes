export const bedResource = (bed) => {
  return {
    id: bed.id,
    bedNumber: bed.bedNumber,
    displayName: bed.displayName,
    bedStatusId: bed.bedStatus?.id,
    status: bed.bedStatus?.status ?? null,

    roomId: bed.room?.id,
    roomName: bed.room?.roomName,
    classId: bed.room?.class?.id,
    className: bed.room?.class?.className ?? null,
    unitId: bed.room?.unit?.id,
    unitName: bed.room?.unit?.unitName,
    departmentId: bed.room?.unit?.department?.id,
    departmentName: bed.room?.unit?.department?.departmentName,
  };
};

export const bedCollection = (beds) => {
  return beds.map((b) => bedResource(b));
};

export const roomWithBedResource = (room) => {
  return {
    roomId: room.roomId,
    roomName: room.roomName,
    classId: room.classId,
    className: room.className ?? null,
    unitId: room.unitId,
    unitName: room.unitName,
    departmentId: room.departmentId,
    departmentName: room.departmentName,
    summary: {
      empty: room.summary?.empty ?? 0,
      occupied: room.summary?.occupied ?? 0,
    },
    beds: room.beds.map((bed) => ({
      id: bed.id,
      bedNumber: bed.bedNumber,
      displayName: bed.displayName,
      bedStatusId: bed.bedStatusId,
      status: bed.status,
    })),
  };
};

export const roomWithBedCollection = (beds) => {
  return beds.map(roomWithBedResource);
};

export const bedStatusResource = (bedStatus) => {
  return {
    id: bedStatus.id,
    status: bedStatus.status,
  };
};

export const bedStatusCollection = (bedStatus) => {
  return bedStatus.map(bedStatusResource);
};

export const bedClassResource = (bedClass) => {
  return {
    id: bedClass.id,
    className: bedClass.className,
  };
};

export const bedClassCollection = (bedClass) => {
  return bedClass.map(bedClassResource);
};

export const bedRoomResource = (bedRoom) => {
  return {
    id: bedRoom.id,
    roomName: bedRoom.roomName,
  };
};

export const bedRoomCollection = (bedRoom) => {
  return bedRoom.map(bedRoomResource);
};

export const bedUnitResource = (bedUnit) => {
  return {
    id: bedUnit.id,
    unitName: bedUnit.unitName,
  };
};

export const bedUnitCollection = (bedUnit) => {
  return bedUnit.map(bedUnitResource);
};
