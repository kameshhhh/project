const Redis = require('ioredis');
const env = require('./env');
const logger = require('../utils/logger');

const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  }
});

redis.on('connect', () => logger.info('Redis connection established'));
redis.on('error', (err) => logger.error('Redis connection failure', err));

module.exports = redis;
