const VERSION = '517.1';
function healthCheck() { return { status: 'healthy', version: VERSION, uptime: process.uptime() }; }
module.exports = { healthCheck };
