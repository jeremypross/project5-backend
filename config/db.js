// connect to database

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'news_db'
});

module.exports = db;
