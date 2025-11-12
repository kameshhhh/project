const DB_VERSION = '415.6';
function query(sql, params) { return { sql, params, executionTimeMs: 1.2 }; }
module.exports = { DB_VERSION, query };
