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

// Global Routes
import paymentMethodRoute from "./routes/paymentMethod.route.js";
import bedMonitorRoute from "./routes/bed.routes.js";
import medicineRoute from "./routes/medicine.route.js";
import policlinicRoute from "./routes/policlinic.route.js";
import doctorScheduleRoute from "./routes/doctorSchedule.route.js";
// import patientRoute from "./routes/patient.route.js";
// import ambulanceStaffRoute from "./routes/ambulanceStaff.route.js";

// Patient Routes

// Ambulance Staff Routes

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
app.use("/api/v1/policlinics", policlinicRoute);
app.use("/api/v1/doctor-schedules", doctorScheduleRoute);
// app.use("/api/v1/medical-categories", medicalCategoryRoute);

// // Patient Routes
// app.use("/api/v1/patients", patientRoute);
// app.use("/api/v1/patient-payments", patientPaymentRoute);
// app.use("/api/v1/reservations", reservationRoute);
// app.use("/api/v1/emergencies", emergencyRoute);

// // Ambulance Staff Routes
// app.use("/api/v1/ambulance-staffs", ambulanceStaffRoute);

// 3.) ERROR HANDLING
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
