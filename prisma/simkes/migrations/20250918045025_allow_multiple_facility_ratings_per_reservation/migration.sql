/*
  Warnings:

  - A unique constraint covering the columns `[reservationId,facilityId]` on the table `FacilityRating` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "FacilityRating_reservationId_key";

-- CreateIndex
CREATE INDEX "FacilityRating_reservationId_idx" ON "FacilityRating"("reservationId");

-- CreateIndex
CREATE UNIQUE INDEX "FacilityRating_reservationId_facilityId_key" ON "FacilityRating"("reservationId", "facilityId");
