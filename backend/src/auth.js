const VERSION = '297.3';
function authenticate(token) { return Boolean(token && token.length > 32); }
module.exports = { VERSION, authenticate };
