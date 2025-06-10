const VERSION = '133.1';
function healthCheck() { return { status: 'healthy', version: VERSION, uptime: process.uptime() }; }
module.exports = { healthCheck };
