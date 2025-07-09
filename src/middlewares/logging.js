import logger from "../utils/logger.js";

export default (req, res, next) => {
  res.on("finish", () => {
    const logData = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      timestamp: new Date().toISOString(),
    };

    if (res.statusCode >= 500) {
      logger.error(logData);
    } else if (res.statusCode >= 400) {
      logger.warn(logData);
    }
  });
  next();
};
