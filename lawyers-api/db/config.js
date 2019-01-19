
var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: 'lawyers_dbd',
  user: 'masarah', // your username here!!
};

var connection = pgInstance(config);

module.exports = connection;