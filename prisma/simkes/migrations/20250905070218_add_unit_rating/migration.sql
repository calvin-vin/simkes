-- CreateTable
CREATE TABLE "UnitRating" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnitRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UnitRating_reservationId_key" ON "UnitRating"("reservationId");

-- CreateIndex
CREATE INDEX "UnitRating_unitId_idx" ON "UnitRating"("unitId");

-- CreateIndex
CREATE INDEX "UnitRating_patientId_idx" ON "UnitRating"("patientId");
