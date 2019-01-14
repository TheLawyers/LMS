// configure postgres to connect our db to our express app
const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'lawyers_db',
  user: 'Azooz' // your username here!!
}

const connection = pgInstance(config);

module.exports = connection;