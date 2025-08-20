export const policlinicResource = (policlinic) => {
  return {
    id: policlinic.id,
    unitName: policlinic.unitName,
  };
};

export const policlinicCollection = (policlinic) => {
  return policlinic.map((p) => policlinicResource(p));
};
