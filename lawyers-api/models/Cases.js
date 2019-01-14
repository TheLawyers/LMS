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
<<<<<<< HEAD
  db.one('INSERT INTO cases(name, legal_instruments, description, date, prosecultor, defendant, type, lawyers_id, court_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
    [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_id, req.body.court_id])
=======
  db.one('INSERT INTO cases(name, legal_instruments, description, date, prosecultor, defendant, type, lawyers_name, court_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
    [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_name, req.body.court_id])
>>>>>>> c99ef9a119ce50dca7360385ef1d96a594fafe45
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
<<<<<<< HEAD
  db.one('UPDATE cases SET name=$1, legal_instruments=$2, description=$3, date=$4, prosecultor=$5, defendant=$6, type=$7, lawyers_id=$8, court_id=$9  WHERE id=$10 RETURNING *;',
  [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_id, req.body.court_id, req.params.id])
=======
  db.one('UPDATE cases SET name=$1, legal_instruments=$2, description=$3, date=$4, prosecultor=$5, defendant=$6, type=$7, lawyers_name=$8, court_id=$9  WHERE id=$10 RETURNING *;',
  [req.body.name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_name, req.body.court_id, req.params.id])
>>>>>>> c99ef9a119ce50dca7360385ef1d96a594fafe45
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