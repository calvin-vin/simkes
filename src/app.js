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

import patientRoute from "./routes/patient.route.js";
import reservationRoute from "./routes/reservation.route.js";

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
app.use("/api/v1/patients", patientRoute);
app.use("/api/v1/reservations", reservationRoute);

// 3.) ERROR HANDLING
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
