export const nurseRatingResource = (rating) => {
  return {
    id: rating.id,
    reservationId: rating.reservationId,
    patientId: rating.patientId,
    rating: rating.rating,
    comment: rating.comment,
    nurse: rating.nurse
      ? {
          id: rating.nurse.id,
          name: rating.nurse.name,
        }
      : null,
    createdAt: rating.createdAt,
    updatedAt: rating.updatedAt,
  };
};

export const nurseRatingsResource = (data) => {
  return {
    results: data.results.map((rating) => nurseRatingResource(rating)),
    pagination: data.pagination,
  };
};

/**
 * Format data rata-rata rating perawat untuk response API
 * @param {Object} data - Data rata-rata rating perawat
 * @returns {Object} Data rata-rata rating perawat yang sudah diformat
 */
export const nurseAverageRatingResource = (data) => {
  return {
    nurseId: data.nurseId,
    averageRating: data.averageRating,
    totalRatings: data.totalRatings,
  };
};
