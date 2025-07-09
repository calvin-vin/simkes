import ApiError from "../utils/apiError.js";

export default (req, res, next) => {
  next(new ApiError("Not Found.", 404));
};
