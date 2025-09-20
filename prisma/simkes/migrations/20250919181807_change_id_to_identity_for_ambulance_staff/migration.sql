/*
  Warnings:

  - The primary key for the `AmbulanceStaff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AmbulanceStaff` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identity]` on the table `AmbulanceStaff` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identity` to the `AmbulanceStaff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmergencyRequest" DROP CONSTRAINT "EmergencyRequest_assignedToId_fkey";

-- AlterTable
ALTER TABLE "AmbulanceStaff" DROP CONSTRAINT "AmbulanceStaff_pkey",
DROP COLUMN "id",
ADD COLUMN     "identity" TEXT NOT NULL,
ADD CONSTRAINT "AmbulanceStaff_pkey" PRIMARY KEY ("identity");

-- AlterTable
ALTER TABLE "NurseSchedule" ADD COLUMN     "quota" INTEGER NOT NULL DEFAULT 10;

-- CreateIndex
CREATE UNIQUE INDEX "AmbulanceStaff_identity_key" ON "AmbulanceStaff"("identity");

-- AddForeignKey
ALTER TABLE "EmergencyRequest" ADD CONSTRAINT "EmergencyRequest_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "AmbulanceStaff"("identity") ON DELETE SET NULL ON UPDATE CASCADE;
