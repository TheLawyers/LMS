const db = require('../db/config');
const cases = {};

cases.getAll = (req, res, next) => {
  db.manyOrNone("SELECT lawyers.lawyer_name as lawyer , cases.* as casesName, corut.* as corut  from corut,  cases , lawyers  where cases.lawyers_id =lawyers.id and cases.court_id=corut.id;")
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
  db.one('INSERT INTO cases(case_name, legal_instruments, description, date, prosecultor, defendant, type, lawyers_id, court_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
    [req.body.case_name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_id, req.body.court_id])
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
  db.one('UPDATE cases SET case_name=$1, legal_instruments=$2, description=$3, date=$4, prosecultor=$5, defendant=$6, type=$7, lawyers_id=$8, court_id=$9  WHERE id=$10 RETURNING *;',
  [req.body.case_name, req.body.legal_instruments, req.body.description, req.body.date, req.body.prosecultor, req.body.defendant, req.body.type, req.body.lawyers_id, req.body.court_id, req.params.id])
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