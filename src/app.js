import cors from "cors";
import dayjs from "dayjs";
import "dayjs/locale/id.js";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import minMax from "dayjs/plugin/minMax.js";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";
import express from "express";
import helmet from "helmet";
import path from "path";

import corsOptions from "./config/cors.js";
import helmetOptions from "./config/helmet.js";
import errorHandler from "./middlewares/error.js";
import loggingMiddleware from "./middlewares/logging.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

import paymentMethodRoute from "./routes/paymentMethod.route.js";
import bedMonitorRoute from "./routes/bed.routes.js";
import medicineRoute from "./routes/medicine.route.js";
import unitRoute from "./routes/unit.route.js";
import doctorScheduleRoute from "./routes/doctorSchedule.route.js";
import genderRoute from "./routes/gender.route.js";
import referralSourceRoute from "./routes/referralSource.js";
import qrcodeRoute from "./routes/qrcode.route.js";
import hospitalLocationRoute from "./routes/hospitalLocation.route.js";
import patientRoute from "./routes/patient.route.js";
import reservationRoute from "./routes/reservation.route.js";
import doctorRatingRoute from "./routes/doctorRating.route.js";
import unitRatingRoute from "./routes/unitRating.route.js";
import facilityRatingRoute from "./routes/facilityRating.route.js";
import facilityRoute from "./routes/facility.route.js";
import postRoute from "./routes/post.route.js";
import galleryRoute from "./routes/gallery.route.js";
import ambulanceStaffRoute from "./routes/ambulanceStaff.route.js";
import emergencyRoute from "./routes/emergency.route.js";

dayjs.extend(isSameOrBefore);
dayjs.locale("id");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);

const app = express();

// 1.) GLOBAL MIDDLEWARES
app.use(cors(corsOptions));
app.use(helmet(helmetOptions));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.set("trust proxy", 1);
app.use(loggingMiddleware);
app.use(express.static(path.join(process.cwd(), "public")));

// 2.) ROUTES
app.get("/", (req, res) => {
  res.send("API SIM PELAYANAN KESEHATAN MALINAU");
});

// Global Routes
app.use("/api/v1/payment-methods", paymentMethodRoute);
app.use("/api/v1/bed", bedMonitorRoute);
app.use("/api/v1/medicines", medicineRoute);
app.use("/api/v1/units", unitRoute);
app.use("/api/v1/doctor-schedules", doctorScheduleRoute);
app.use("/api/v1/gender", genderRoute);
app.use("/api/v1/referral-sources", referralSourceRoute);
app.use("/api/v1/hospital-location", hospitalLocationRoute);
app.use("/api/v1/patients", patientRoute);
app.use("/api/v1/reservations", reservationRoute);
app.use("/api/v1/qrcodes", qrcodeRoute);
app.use("/api/v1/doctor-ratings", doctorRatingRoute);
app.use("/api/v1/unit-ratings", unitRatingRoute);
app.use("/api/v1/facility-ratings", facilityRatingRoute);
app.use("/api/v1/facilities", facilityRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/galleries", galleryRoute);
app.use("/api/v1/ambulance-staffs", ambulanceStaffRoute);
app.use("/api/v1/emergencies", emergencyRoute);

// // Ambulance Staff Routes

// 3.) ERROR HANDLING
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
