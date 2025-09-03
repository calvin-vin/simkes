import { z } from "zod";

/**
 * Schema validasi untuk update callStatus reservasi
 * callStatus: "0" (belumdipanggil), "1" (dipanggil), "2" (sudahdipanggil)
 */
export const updateCallStatusSchema = z.object({
  callStatus: z.enum(["0", "1", "2"], {
    errorMap: () => ({
      message:
        "Status panggil harus salah satu dari: 0 (belum dipanggil), 1 (dipanggil), 2 (sudah dipanggil)",
    }),
  }),
});
