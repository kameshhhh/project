// API Key Digest v20.7
const crypto = require('crypto');

function hashApiKey(rawKey) {
  return crypto.createHash('sha256').update(rawKey).digest('hex');
}

function generateSecureKey(prefix = 'dp_live_') {
  return prefix + crypto.randomBytes(24).toString('hex');
}

module.exports = { hashApiKey, generateSecureKey };
