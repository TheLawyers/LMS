const db = require('../db/config');
const lawyers = {};

lawyers.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM lawyers;')
    .then((data) => {
      res.locals.lawyers = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

lawyers.create = (req, res, next) => {
  db.one('INSERT INTO lawyers (name) VALUES($1) RETURNING *;',
    [req.body.name])
    .then((data) => {
      res.locals.lawyer = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

lawyers.update = (req, res, next) => {
  db.one('UPDATE lawyers SET name=$1 WHERE id=$2 RETURNING *;',
  [req.body.name, req.params.id])
    .then((data) => {
      res.locals.lawyer = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

lawyers.delete = (req, res, next) => {
  db.none('DELETE FROM lawyers WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = lawyers;