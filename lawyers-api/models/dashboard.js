var db = require('../db/config');

var dashboard = {}


dashboard.legalrights = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Legal rights';")
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

dashboard.criminal = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Criminal';")
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

dashboard.familystatus = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Family';")
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

dashboard.commercial = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Commercial';")
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

dashboard.labour = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Labour';")
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
module.exports = dashboard;