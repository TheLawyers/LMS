const db = require('../db/config');
const corut = {};

corut.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM corut;')
    .then((data) => {
      res.locals.coruts = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

corut.create = (req, res, next) => {
  db.one('INSERT INTO corut(name, location, office) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.location, req.body.office])
    .then((data) => {
      res.locals.corut = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

corut.update = (req, res, next) => {
  db.one('UPDATE corut SET name=$1, location=$2, office=$3 WHERE id=$5 RETURNING *;',
  [req.body.name, req.body.location, req.body.office, req.params.id])
    .then((data) => {
      res.locals.corut = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

corut.delete = (req, res, next) => {
  db.none('DELETE FROM corut WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = corut;