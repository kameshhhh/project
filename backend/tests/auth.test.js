const { hashPassword, verifyPassword, generateAccessToken, verifyAccessToken } = require('../src/utils/security');

describe('Security Utility Suite', () => {
  it('should hash and successfully verify passwords with argon2', async () => {
    const raw = 'SuperSecureP@ssw0rd!2025';
    const hashed = await hashPassword(raw);
    expect(hashed).not.toBe(raw);
    const valid = await verifyPassword(hashed, raw);
    expect(valid).toBe(true);
  });

  it('should reject invalid password match', async () => {
    const raw = 'Password123';
    const hashed = await hashPassword(raw);
    const valid = await verifyPassword(hashed, 'WrongPassword');
    expect(valid).toBe(false);
  });

  it('should encode and decode valid jwt tokens', () => {
    const payload = { userId: '123e4567-e89b-12d3-a456-426614174000', role: 'admin' };
    const token = generateAccessToken(payload);
    const decoded = verifyAccessToken(token);
    expect(decoded.userId).toBe(payload.userId);
    expect(decoded.role).toBe('admin');
  });
});
