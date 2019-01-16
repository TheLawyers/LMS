var db = require('../db/config');

var lawdashboard = {}


lawdashboard.oneCase = function (req, res, next) {
    db.manyOrNone("Select * from cases Where date_trunc('day', date) = date_trunc('day', current_date + 1) AND lawyers_id =$1;", [req.params.id])
        .then(function (result) {
            console.log(result)
            res.locals.oneCase = result;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}


// no.case 
// typeof.case for each lawyers
lawdashboard.criminal = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 WHERE cases.type='Criminal';", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.criminal = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

lawdashboard.legalrights = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 WHERE cases.type='Legal rights';", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.legalrights = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}



lawdashboard.familystatus = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 WHERE cases.type='Family';", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.familystatus = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

lawdashboard.commercial = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 WHERE cases.type='Commercial';", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.commercial = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

lawdashboard.labour = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 WHERE cases.type='Labour';", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.labour = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

// no of Cases 
lawdashboard.casesNo = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id AND lawyers.id=$1;", [req.params.id])
        .then(function (result) {
            console.log(result.count)
            res.locals.casesNo = result.count;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

// Busiest month  

lawdashboard.busiest = function (req, res, next) {
    db.manyOrNone("SELECT COUNT(EXTRACT(MONTH FROM date)) as month_count, EXTRACT(MONTH FROM date) as month from cases JOIN lawyers ON cases.lawyers_id = lawyers.id AND lawyers.id =$1 GROUP BY EXTRACT(MONTH FROM date) ORDER BY month_count DESC;", [req.params.id])
        .then(function (result) {
            console.log(result)
            res.locals.busiest = result;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}
module.exports = lawdashboard;