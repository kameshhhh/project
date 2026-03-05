const DB_VERSION = '621.6';
function query(sql, params) { return { sql, params, executionTimeMs: 1.2 }; }
module.exports = { DB_VERSION, query };
