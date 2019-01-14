const db = require('../db/config');
const cases = {};

cases.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM cases;')
    .then((data) => {
      res.locals.cases = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

cases.create = (req, res, next) => {
  db.one('INSERT INTO cases(name, legal_instruments, description, date, prosecutor, defendant, type, lawyers_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
    [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecutor, req.body.defendant, req.body.type, req.body.lawyers_id])
    .then((data) => {
      res.locals.case = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

cases.update = (req, res, next) => {
  db.one('UPDATE cases SET name=$1, legal_instruments=$2, description=$3, date=$4, prosecutor=$5, defendant=$6, type=$7  WHERE id=$8 RETURNING *;',
  [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecutor, req.body.defendant, req.body.type, req.params.id])
    .then((data) => {
      res.locals.case = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

cases.delete = (req, res, next) => {
  db.none('DELETE FROM cases WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = cases;