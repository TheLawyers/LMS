const express = require('express');
const router = express.Router();

const dashboard = require('../models/dashboard');

// these methods e.x. "legalrights" is similar to "getAll"

router.get('/', 
dashboard.legalrights,
dashboard.criminal,
dashboard.familystatus,
dashboard.commercial, 
dashboard.labour, 
(req, res) => res.json(res.locals) );





module.exports = router;