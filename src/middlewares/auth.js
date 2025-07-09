import { verifyToken } from "../config/jwt.js";
import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

const protect = async (req, res, next) => {
  try {
    // 1) Get token from header
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new ApiError("You are not logged in! Please log in to get access.", 401)
      );
    }

    // 2) Verify token
    const decoded = await verifyToken(token, process.env.JWT_SECRET);

    if (!decoded?.user?.id) {
      return next(new ApiError("Token payload is invalid.", 400));
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("Error in protect middleware:", err);
    console.log(err);
    next(err);
  }
};

// Middleware to check role and subrole
const restrictToRolesAndSubroles = (
  requiredRoles = [],
  requiredSubroles = []
) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;

      // Get all user access
      const userAccesses = await prisma.roleAccessApplication.findMany({
        where: { userId },
        include: {
          mainRole: true,
          subRole: true,
          application: true,
        },
      });

      // Check if user has minimum one access that allowed
      const hasAccess = userAccesses.some((access) => {
        const roleMatch =
          requiredRoles.length === 0 ||
          requiredRoles.includes(access.mainRole.roleName);

        const subroleMatch =
          requiredSubroles.length === 0 ||
          requiredSubroles.includes(access.subRole.subRoleName);

        return roleMatch && subroleMatch;
      });

      if (!hasAccess) {
        return next(
          new ApiError("You do not have permission to perform this action", 403)
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export { protect, restrictToRolesAndSubroles };
