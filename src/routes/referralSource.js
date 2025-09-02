import express from "express";
import { simrsPrisma } from "../config/db.js";
import apiSuccess from "../utils/apiSuccess.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const referralSources = await simrsPrisma.referralSource.findMany({
    where: {
      isEnabled: true,
    },
    select: {
      id: true,
      source: true,
    },
  });

  return apiSuccess(
    res,
    200,
    "Referral source retrieved successfully",
    referralSources
  );
});

export default router;
