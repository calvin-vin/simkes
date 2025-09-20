import express from "express";
import {
  ensureAmbulanceStaff,
  getAllAmbulanceStaff,
  getAmbulanceStaffByIdentity,
  getMe,
  updateAmbulanceStaffPhoto,
} from "../controllers/ambulanceStaff.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadAmbulanceStaffPhoto } from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/ensure-ambulance-staff",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  ensureAmbulanceStaff
);

router.get(
  "/",
  protect,
  restrictToRoleSubrole([
    { role: "OPERATOR", subrole: "OPERATOR" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
  ]),
  getAllAmbulanceStaff
);

router.get(
  "/me",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  getMe
);

router.get(
  "/:identity",
  protect,
  restrictToRoleSubrole([
    { role: "OPERATOR", subrole: "OPERATOR" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
  ]),
  getAmbulanceStaffByIdentity
);

// Route untuk update foto profil ambulance staff (khusus ambulance staff tersebut)
router.patch(
  "/update-photo",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  uploadAmbulanceStaffPhoto.single("photo"),
  updateAmbulanceStaffPhoto
);

export default router;
