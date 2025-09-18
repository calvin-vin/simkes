-- CreateTable
CREATE TABLE "Nurse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "speciality" TEXT,
    "description" TEXT,
    "photoUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nurse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NurseSchedule" (
    "id" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "dayOfWeek" SMALLINT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "quota" INTEGER NOT NULL DEFAULT 10,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NurseSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NurseRating" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NurseRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "NurseSchedule_nurseId_idx" ON "NurseSchedule"("nurseId");

-- CreateIndex
CREATE INDEX "NurseSchedule_dayOfWeek_idx" ON "NurseSchedule"("dayOfWeek");

-- CreateIndex
CREATE UNIQUE INDEX "NurseRating_reservationId_key" ON "NurseRating"("reservationId");

-- CreateIndex
CREATE INDEX "NurseRating_nurseId_idx" ON "NurseRating"("nurseId");

-- CreateIndex
CREATE INDEX "NurseRating_patientId_idx" ON "NurseRating"("patientId");

-- AddForeignKey
ALTER TABLE "NurseSchedule" ADD CONSTRAINT "NurseSchedule_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Nurse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseRating" ADD CONSTRAINT "NurseRating_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Nurse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
