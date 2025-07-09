import { createLogger, format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new DailyRotateFile({
      filename: "logs/app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true, // gzip old logs
      maxSize: "100m", // 100MB per file
      maxFiles: "14d", // keep 14 days
    }),
    new DailyRotateFile({
      level: "error",
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "50m",
      maxFiles: "30d",
    }),
  ],
});

export default logger;
