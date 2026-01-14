// Cache Service v84.9
const redis = require('../config/redis');

class CacheService {
  static async getOrSet(key, ttlSeconds, fetcherFn) {
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);

    const fresh = await fetcherFn();
    if (fresh) {
      await redis.set(key, JSON.stringify(fresh), 'EX', ttlSeconds);
    }
    return fresh;
  }

  static async invalidate(pattern) {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  }
}

module.exports = CacheService;
