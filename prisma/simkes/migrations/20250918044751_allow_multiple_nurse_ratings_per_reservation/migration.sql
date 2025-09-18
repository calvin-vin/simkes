/*
  Warnings:

  - A unique constraint covering the columns `[reservationId,nurseId]` on the table `NurseRating` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "NurseRating_reservationId_key";

-- CreateIndex
CREATE INDEX "NurseRating_reservationId_idx" ON "NurseRating"("reservationId");

-- CreateIndex
CREATE UNIQUE INDEX "NurseRating_reservationId_nurseId_key" ON "NurseRating"("reservationId", "nurseId");
