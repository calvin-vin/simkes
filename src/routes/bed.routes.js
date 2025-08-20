import express from "express";
import {
  getAllBeds,
  getAllBedStatus,
  getAllClass,
  getAllRoom,
  getAllRoomWithBeds,
  getAllUnit,
  getBedById,
  getBedSummary,
  getRoomwithBedsById,
} from "../controllers/bed.controller.js";

const router = express.Router();

router.get("/summary", getBedSummary);
router.get("/room-with-beds", getAllRoomWithBeds);
router.get("/room-with-beds/:id", getRoomwithBedsById);
router.get("/status", getAllBedStatus);
router.get("/class", getAllClass);
router.get("/room", getAllRoom);
router.get("/unit", getAllUnit);
router.get("/", getAllBeds);
router.get("/:id", getBedById);

export default router;
