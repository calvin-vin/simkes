/*
  Warnings:

  - A unique constraint covering the columns `[simrsId]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[simrsId]` on the table `DoctorSchedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[simrsId]` on the table `MedicalCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Doctor_simrsId_key" ON "Doctor"("simrsId");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorSchedule_simrsId_key" ON "DoctorSchedule"("simrsId");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalCategory_simrsId_key" ON "MedicalCategory"("simrsId");
