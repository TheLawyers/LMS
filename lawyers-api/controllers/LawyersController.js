const express = require('express');
const router = express.Router();

const lawyers = require('../models/Lawyers');
const cases = require('../models/Cases');
const corut = require('../models/Corut');

const sendLawyers = (req, res) => res.json({lawyers: res.locals.lawyers, cases: res.locals.cases, corut: res.locals.coruts});
const sendLawyer = (req, res) => res.json({lawyers: res.locals.lawyer, cases: res.locals.case, corut: res.locals.corut});
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', lawyers.getAll, cases.getAll, corut.getAll, sendLawyers);
router.post('/', lawyers.create, cases.create, corut.create, sendLawyer);
router.put('/:id', lawyers.update, cases.update, corut.update, sendLawyer);
router.delete('/:id', lawyers.delete, cases.delete, corut.delete, sendSuccess);

module.exports = router;