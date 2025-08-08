export default (res, statusCode, message, responseData = null) => {
  const response = {
    status: "success",
    message,
  };

  if (responseData) {
    response.data = responseData;
  }

  return res.status(statusCode).json(response);
};
