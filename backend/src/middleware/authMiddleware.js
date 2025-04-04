const { verifyAccessToken } = require('../utils/security');
const { AppError } = require('../utils/response');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Missing or malformed Authorization header', 401));
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return next(new AppError('Invalid or expired authentication token', 401));
  }
}

function requireRole(allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return next(new AppError('Access denied: insufficient permissions', 403));
    }
    next();
  };
}

module.exports = { authenticate, requireRole };
