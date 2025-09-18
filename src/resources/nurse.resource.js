export const nurseResource = (nurse) => {
  return {
    id: nurse.id,
    name: nurse.name,
    speciality: nurse.speciality,
    description: nurse.description,
    photoUrl: nurse.photoUrl,
    isActive: nurse.isActive,
    rating: {
      averageRating: nurse.averageRating,
      totalRatings: nurse.totalRatings,
    },
    createdAt: nurse.createdAt,
    updatedAt: nurse.updatedAt,
  };
};

export const nursesResource = (data) => {
  return {
    results: data.results.map((nurse) => nurseResource(nurse)),
    pagination: data.pagination,
  };
};
