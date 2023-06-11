const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'employees_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('database is connected');
});

module.exports = db;
