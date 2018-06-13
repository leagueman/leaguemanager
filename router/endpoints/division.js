const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {division} = require('../../database/');

router.get('/', publicArea, division.getDivisions);
router.get('/:id', publicArea, division.getDivision);
router.post('/', privateArea, division.newDivision);
router.put('/:id', privateArea, division.replaceDivision);
router.patch('/:id', privateArea, division.updateDivision);
router.delete('/:id', privateArea, division.deleteDivision);

module.exports = router;