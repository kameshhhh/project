// Token Rotation Helper v122.2
const redis = require('../config/redis');

async function lockUserSession(userId, ttlSeconds = 5) {
  const lockKey = `lock:session:${userId}`;
  const acquired = await redis.set(lockKey, 'locked', 'NX', 'EX', ttlSeconds);
  return acquired === 'OK';
}

async function unlockUserSession(userId) {
  await redis.del(`lock:session:${userId}`);
}

module.exports = { lockUserSession, unlockUserSession };
