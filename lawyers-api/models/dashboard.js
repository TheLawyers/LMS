var db = require('../db/config');

var dashboard ={}


dashboard.legalrights =function (req, res, next) {
        db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Legal rights';")  
          .then(function (result) {  
              console.log( result.count)
            res.locals.dashboard = result.count; 
            next();  
          })
          .catch(function (error) { 
            console.log(error); 
            next(); 
          })
      }

      dashboard.criminal =function (req, res, next) {
        db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Criminal';")  
          .then(function (result) {  
              console.log( result.count)
            res.locals.dashboard = result.count; 
            next();  
          })
          .catch(function (error) { 
            console.log(error); 
            next(); 
          })
      }

      dashboard.familyStatus =function (req, res, next) {
        db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Family Status';")  
          .then(function (result) {  
              console.log( result.count)
            res.locals.dashboard = result.count; 
            next();  
          })
          .catch(function (error) { 
            console.log(error); 
            next(); 
          })
      }

      dashboard.familyStatus =function (req, res, next) {
        db.oneOrNone("SELECT COUNT(type) FROM cases WHERE type='Family Status';")  
          .then(function (result) {  
              console.log( result.count)
            res.locals.dashboard = result.count; 
            next();  
          })
          .catch(function (error) { 
            console.log(error); 
            next(); 
          })
      }
module.exports = dashboard;