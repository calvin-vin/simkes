export const unitResource = (unit) => {
  return {
    id: unit.id,
    unitName: unit.unitName,
    rating: {
      averageRating: unit.averageRating || 0,
      totalRatings: unit.totalRatings || 0
    }
  };
};

export const unitCollection = (unit) => {
  return unit.map((p) => unitResource(p));
};
