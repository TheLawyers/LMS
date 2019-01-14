const express = require('express');
const router = express.Router();

const dashboard = require('../models/dashboard');

const sendDashboard = (req, res) => res.json(res.locals.dashboards);

// these methods e.x. "legalrights" is similar to "getAll"

router.get('/', dashboard.legalrights, sendDashboard);

router.get('/', dashboard.criminal, sendDashboard);

router.get('/', dashboard.familystatus, sendDashboard);

router.get('/', dashboard.commercial, sendDashboard);

router.get('/', dashboard.labour, sendDashboard);



module.exports = router;