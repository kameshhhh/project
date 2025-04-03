const logger = require('../utils/logger');
const { ApiResponse, AppError } = require('../utils/response');

function errorHandler(err, req, res, next) {
  logger.error(err.message, { stack: err.stack, path: req.path });

  if (err instanceof AppError) {
    return ApiResponse.error(res, err.message, err.statusCode, err.errors);
  }

  if (err.name === 'ZodError') {
    return ApiResponse.error(res, 'Validation Failed', 422, err.errors);
  }

  return ApiResponse.error(res, 'Internal Server Error', 500);
}

function notFoundHandler(req, res) {
  return ApiResponse.error(res, `Resource ${req.originalUrl} not found`, 404);
}

module.exports = { errorHandler, notFoundHandler };
