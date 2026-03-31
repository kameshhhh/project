const cache = new Map();
function getOrSet(k, v) { if (!cache.has(k)) cache.set(k, v); return cache.get(k); }
module.exports = { VERSION: '667.8', getOrSet };
