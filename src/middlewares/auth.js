import { verifyToken } from "../config/jwt.js";
import ApiError from "../utils/apiError.js";

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const applicationToken = req.headers["application-token"];
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return next(new ApiError("Unauthorized: No token provided.", 401));
    }

    const { user } = await verifyToken(token, process.env.JWT_SECRET);

    if (!user?.id) {
      return next(new ApiError("Invalid token payload.", 400));
    }

    // Validasi Application-Token
    if (!applicationToken) {
      return next(
        new ApiError("Unauthorized: No application token provided.", 401)
      );
    }

    // Verifikasi Application-Token sebagai JWT yang berisi daftar aplikasi
    let applicationData;
    try {
      applicationData = await verifyToken(
        applicationToken,
        process.env.JWT_SECRET
      );
      if (
        !applicationData?.applications ||
        !Array.isArray(applicationData.applications)
      ) {
        return next(
          new ApiError("Unauthorized: Invalid application token format.", 401)
        );
      }
    } catch (error) {
      return next(
        new ApiError("Unauthorized: Invalid application token.", 401)
      );
    }

    // Cari aplikasi yang sesuai dengan APPLICATION_KEY di dalam application token
    const app = applicationData.applications.find(
      (a) => a.applicationKey === process.env.APPLICATION_KEY
    );

    if (!app) {
      return next(new ApiError("Forbidden: Application access denied.", 403));
    }

    req.user = user;
    req.userRole = app.role;
    req.userSubrole = app.subrole;
    next();
  } catch (err) {
    console.error("protect error:", err);
    next(err);
  }
};

/**
 * allowedCombinations: array of objects containing role & subrole to match
 * Example: [{ role: 'DOCTOR', subrole: 'GENERAL' }, { role: 'PATIENT', subrole: 'PATIENT' }]
 */
const restrictToRoleSubrole = (allowedCombinations = []) => {
  return (req, res, next) => {
    const { userRole, userSubrole } = req;

    if (!userRole || !userSubrole) {
      return next(new ApiError("Role or subrole not found.", 403));
    }

    const isAllowed = allowedCombinations.some(
      (combo) => combo.role === userRole && combo.subrole === userSubrole
    );

    if (!isAllowed) {
      return next(
        new ApiError(
          "Forbidden: You do not have permission to access this route.",
          403
        )
      );
    }

    next();
  };
};

export { protect, restrictToRoleSubrole };
