/*
  Warnings:

  - You are about to drop the column `externalId` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `DoctorSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `syncAt` on the `MedicalCategory` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `Medicine` table. All the data in the column will be lost.
  - Added the required column `simrsId` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `simrsId` to the `DoctorSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Doctor_externalId_key";

-- DropIndex
DROP INDEX "DoctorSchedule_externalId_key";

-- DropIndex
DROP INDEX "MedicalCategory_simrsId_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "externalId",
ADD COLUMN     "simrsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DoctorSchedule" DROP COLUMN "externalId",
ADD COLUMN     "simrsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MedicalCategory" DROP COLUMN "syncAt",
ADD COLUMN     "syncedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "externalId",
ADD COLUMN     "simrsId" TEXT;
