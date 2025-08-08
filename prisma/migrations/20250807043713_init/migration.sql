/*
  Warnings:

  - You are about to drop the column `notes` on the `EmergencyRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmergencyHistory" ADD COLUMN     "ambulanceStaffLocation" TEXT;

-- AlterTable
ALTER TABLE "EmergencyRequest" DROP COLUMN "notes",
ADD COLUMN     "note" TEXT;
