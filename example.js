var sql = require('./index.js');

var stmt = sql.select('fieldA', 'fieldB').from('tbl');

console.log(stmt.stmt, stmt.stmt.toString());
