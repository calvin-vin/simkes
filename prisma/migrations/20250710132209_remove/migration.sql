/*
  Warnings:

  - The values [CANCELLED] on the enum `ReservationStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `referralFileId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `ReferralFile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referralFile]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReservationStatus_new" AS ENUM ('WAITING', 'CALLED', 'DONE');
ALTER TABLE "Reservation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Reservation" ALTER COLUMN "status" TYPE "ReservationStatus_new" USING ("status"::text::"ReservationStatus_new");
ALTER TYPE "ReservationStatus" RENAME TO "ReservationStatus_old";
ALTER TYPE "ReservationStatus_new" RENAME TO "ReservationStatus";
DROP TYPE "ReservationStatus_old";
ALTER TABLE "Reservation" ALTER COLUMN "status" SET DEFAULT 'WAITING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_referralFileId_fkey";

-- DropIndex
DROP INDEX "Reservation_referralFileId_key";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "referralFileId",
ADD COLUMN     "referralFile" TEXT;

-- DropTable
DROP TABLE "ReferralFile";

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_referralFile_key" ON "Reservation"("referralFile");
