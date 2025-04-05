const db = require('../config/database');
const redis = require('../config/redis');
const { hashPassword, verifyPassword, generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/security');
const { AppError } = require('../utils/response');

class AuthService {
  static async register({ email, password, firstName, lastName }) {
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      throw new AppError('Email address already registered', 409);
    }

    const hashed = await hashPassword(password);
    const result = await db.query(
      `INSERT INTO users (email, password_hash, first_name, last_name)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, first_name, last_name, role, created_at`,
      [email, hashed, firstName, lastName]
    );

    const user = result.rows[0];
    const accessToken = generateAccessToken({ userId: user.id, email: user.email, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    await redis.set(`refresh_token:${user.id}`, refreshToken, 'EX', 7 * 86400);

    return { user, accessToken, refreshToken };
  }

  static async login({ email, password }) {
    const result = await db.query(
      'SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = $1',
      [email]
    );
    if (result.rows.length === 0) {
      throw new AppError('Invalid email or password', 401);
    }

    const user = result.rows[0];
    const valid = await verifyPassword(user.password_hash, password);
    if (!valid) {
      throw new AppError('Invalid email or password', 401);
    }

    const accessToken = generateAccessToken({ userId: user.id, email: user.email, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    await redis.set(`refresh_token:${user.id}`, refreshToken, 'EX', 7 * 86400);

    delete user.password_hash;
    return { user, accessToken, refreshToken };
  }

  static async refresh(token) {
    try {
      const decoded = verifyRefreshToken(token);
      const stored = await redis.get(`refresh_token:${decoded.userId}`);
      if (stored !== token) {
        throw new AppError('Revoked or invalid refresh token', 401);
      }

      const result = await db.query('SELECT id, email, role FROM users WHERE id = $1', [decoded.userId]);
      if (result.rows.length === 0) throw new AppError('User no longer exists', 401);

      const user = result.rows[0];
      const newAccessToken = generateAccessToken({ userId: user.id, email: user.email, role: user.role });
      const newRefreshToken = generateRefreshToken({ userId: user.id });

      await redis.set(`refresh_token:${user.id}`, newRefreshToken, 'EX', 7 * 86400);

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (e) {
      throw new AppError('Invalid refresh token session', 401);
    }
  }
}

module.exports = AuthService;
