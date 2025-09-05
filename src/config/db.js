import { PrismaClient as SimkesPrismaClient } from "../../prisma/generated/simkes/index.js";
import { PrismaClient as SimrsPrismaClient, Prisma as SimrsPrisma } from "../../prisma/generated/simrs/index.js";

export const simkesPrisma = new SimkesPrismaClient();

export const simrsPrisma = new SimrsPrismaClient();

// Export Prisma namespace for raw queries and other utilities
export const Prisma = SimrsPrisma;
