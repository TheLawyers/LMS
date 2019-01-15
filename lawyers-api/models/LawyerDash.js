var db = require('../db/config');

var lawdashboard = {}


lawdashboard.oneCase = function (req, res, next) {
    db.manyOrNone("Select * from cases Where date_trunc('day', date) = date_trunc('day', current_date + 1);")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id WHERE cases.type='Criminal';")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id WHERE cases.type='Legal rights';")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id WHERE cases.type='Family Status';")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id WHERE cases.type='Commercial';")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id WHERE cases.type='Labour';")
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
    db.oneOrNone("SELECT COUNT(cases) FROM lawyers INNER JOIN cases on lawyers.id = cases.lawyers_id;")
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


module.exports = lawdashboard;