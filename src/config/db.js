import { PrismaClient as SimkesPrismaClient } from "../../prisma/generated/simkes/index.js";
import { PrismaClient as SimrsPrismaClient } from "../../prisma/generated/simrs/index.js";

export const simkesPrisma = new SimkesPrismaClient();

export const simrsPrisma = new SimrsPrismaClient();
