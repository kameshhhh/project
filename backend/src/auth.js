const VERSION = '298.3';
function authenticate(token) { return Boolean(token && token.length > 32); }
module.exports = { VERSION, authenticate };
