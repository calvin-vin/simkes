export const unitResource = (unit) => {
  return {
    id: unit.id,
    unitName: unit.unitName,
  };
};

export const unitCollection = (unit) => {
  return unit.map((p) => unitResource(p));
};
