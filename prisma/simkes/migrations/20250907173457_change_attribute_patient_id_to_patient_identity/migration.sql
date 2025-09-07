/*
  Warnings:

  - You are about to drop the column `patientId` on the `EmergencyRequest` table. All the data in the column will be lost.
  - Added the required column `patientIdentity` to the `EmergencyRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmergencyRequest" DROP COLUMN "patientId",
ADD COLUMN     "patientIdentity" TEXT NOT NULL;
