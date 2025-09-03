import { updateCallStatus } from "../services/updateCallStatus.service.js";
import { updateCallStatusSchema } from "../schemas/updateCallStatus.schema.js";
import { reservationResource } from "../resources/reservation.resource.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Controller untuk mengubah callStatus reservasi
 * Hanya dapat diakses oleh operator dan superadmin
 */
export const updateCallStatusController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = updateCallStatusSchema.parse(req.body);
  const { callStatus } = parsedBody;

  const updatedReservation = await updateCallStatus(id, callStatus);

  return apiSuccess(
    res,
    200,
    "Status panggil reservasi berhasil diperbarui",
    reservationResource(updatedReservation)
  );
});