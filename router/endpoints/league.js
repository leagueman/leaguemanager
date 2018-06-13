const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {league} = require('../../database/');

router.get('/', publicArea, league.getLeagues);
router.get('/:id', publicArea, league.getLeague);
router.post('/', privateArea, league.newLeague);
router.put('/:id', privateArea, league.replaceLeague);
router.patch('/:id', privateArea, league.updateLeague);
router.delete('/:id', privateArea, league.deleteLeague);

module.exports = router;