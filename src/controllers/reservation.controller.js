import * as reservationService from "../services/reservation.service.js";
import { createReservationSchema } from "../schemas/reservation.schema.js";
import { reservationResource } from "../resources/reservation.resource.js";
import catchAsync from "../utils/catchAsync.js";
import apiSuccess from "../utils/apiSuccess.js";

export const createReservation = catchAsync(async (req, res) => {
  const parsedBody = createReservationSchema.parse(req.body);

  let referralFile = null;
  if (req.file) {
    referralFile = req.file;
  }

  const reservation = await reservationService.createReservation({
    ...parsedBody,
    patientExternalId: req.user.id,
    referralFile,
  });

  return apiSuccess(
    res,
    201,
    "Reservation created successfully",
    reservationResource(reservation)
  );
});
