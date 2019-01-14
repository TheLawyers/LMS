const express = require('express');
const router = express.Router();

const lawdashboard = require('../models/LawyerDash');

// these methods e.x. "legalrights" is similar to "getAll"

router.get('/', 
lawdashboard.oneCase,
lawdashboard.criminal,
lawdashboard.legalrights,
lawdashboard.familystatus,
lawdashboard.commercial,
lawdashboard.labour,


(req, res) => res.json(res.locals) );





module.exports = router;