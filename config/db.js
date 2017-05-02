// connect to database

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'project_5_db'
});

module.exports = db;
