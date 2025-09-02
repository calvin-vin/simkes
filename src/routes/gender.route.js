import express from "express";
import { simrsPrisma } from "../config/db.js";
import apiSuccess from "../utils/apiSuccess.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const gender = await simrsPrisma.gender.findMany({
    where: {
      isEnabled: true,
      id: {
        in: [1, 2],
      },
    },
    select: {
      id: true,
      gender: true,
    },
  });

  return apiSuccess(res, 200, "Gender retrieved successfully", gender);
});

export default router;
