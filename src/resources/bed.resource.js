export const bedResource = (bed) => {
  return {
    id: bed.id,
    nomor: bed.nomorbed,
    display: bed.reportdisplay,
    idstatusbed: bed.status?.id,
    statusbed: bed.status?.statusbed ?? null,
    idkamar: bed.kamar?.id,
    namakamar: bed.kamar?.namakamar,
    idkelas: bed.kamar?.kelas?.id,
    namakelas: bed.kamar?.kelas?.namakelas ?? null,
    idruangan: bed.kamar?.ruangan?.id,
    namaruangan: bed.kamar?.ruangan?.namaruangan,
    iddepartemen: bed.kamar?.ruangan?.departemen?.id,
    namadepartemen: bed.kamar?.ruangan?.departemen?.namadepartemen,
  };
};

export const bedCollection = (beds) => {
  return beds.map(bedResource);
};

export const kamarWithBedResource = (kamar) => {
  return {
    idkamar: kamar.idkamar,
    namakamar: kamar.namakamar,
    idkelas: kamar.idkelas,
    namakelas: kamar.namakelas ?? null,
    idruangan: kamar.idruangan,
    namaruangan: kamar.namaruangan,
    iddepartemen: kamar.iddepartemen,
    namadepartemen: kamar.namadepartemen,
    summary: {
      kosong: kamar.summary?.kosong ?? 0,
      terisi: kamar.summary?.terisi ?? 0,
    },
    tempatTidur: kamar.tempatTidur.map((bed) => ({
      id: bed.id,
      nomor: bed.nomor, // konsisten sama service (bed.nomor)
      display: bed.display, // konsisten sama service (bed.display)
      idstatusbed: bed.idstatusbed,
      statusbed: bed.statusbed,
    })),
  };
};

export const kamarWithBedCollection = (beds) => {
  return beds.map(kamarWithBedResource);
};

export const bedStatusResource = (bedStatus) => {
  return {
    id: bedStatus.id,
    statusbed: bedStatus.statusbed,
  };
};

export const bedStatusCollection = (bedStatus) => {
  return bedStatus.map(bedStatusResource);
};

export const bedClassResource = (bedClass) => {
  return {
    id: bedClass.id,
    namakelas: bedClass.namakelas,
  };
};

export const bedClassCollection = (bedClass) => {
  return bedClass.map(bedClassResource);
};

export const bedKamarResource = (bedKamar) => {
  return {
    id: bedKamar.id,
    namakamar: bedKamar.namakamar,
  };
};

export const bedKamarCollection = (bedKamar) => {
  return bedKamar.map(bedKamarResource);
};

export const bedRuanganResource = (bedRuangan) => {
  return {
    id: bedRuangan.id,
    namaruangan: bedRuangan.namaruangan,
  };
};

export const bedRuanganCollection = (bedRuangan) => {
  return bedRuangan.map(bedRuanganResource);
};
