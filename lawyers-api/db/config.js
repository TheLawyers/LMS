// // configure postgres to connect our db to our express app
// const pgPromise = require('pg-promise');
// const pgInstance = pgPromise();

// const config = {
//   host: 'localhost',
//   port: 5432,
//   database: 'lawyers_db',
//   user: 'hamadalshehri' // your username here!!
// }

// const connection = pgInstance(config);

// module.exports = connection;
var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: "express_users",
  user: process.env.DB_USER
};

var connection = pgInstance(config);

module.exports = connection;