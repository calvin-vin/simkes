import jwt from "jsonwebtoken";
import { promisify } from "util";

// Verify tokens
const verifyToken = async (token, secret) => {
  return await promisify(jwt.verify)(token, secret);
};

export { verifyToken };
