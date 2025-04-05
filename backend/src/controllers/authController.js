const { z } = require('zod');
const AuthService = require('../services/authService');
const { ApiResponse } = require('../utils/response');

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

class AuthController {
  static async register(req, res, next) {
    try {
      const payload = registerSchema.parse(req.body);
      const data = await AuthService.register(payload);
      return ApiResponse.success(res, data, 'Registration successful', 201);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const payload = loginSchema.parse(req.body);
      const data = await AuthService.login(payload);
      return ApiResponse.success(res, data, 'Login successful');
    } catch (err) {
      next(err);
    }
  }

  static async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const data = await AuthService.refresh(refreshToken);
      return ApiResponse.success(res, data, 'Token refreshed');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthController;
