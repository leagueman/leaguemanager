const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {team} = require('../../database/');

router.get('/', publicArea, team.getTeams);
router.get('/:id', publicArea, team.getTeam);
router.post('/', privateArea, team.newTeam);
router.put('/:id', privateArea, team.replaceTeam);
router.patch('/:id', privateArea, team.updateTeam);
router.delete('/:id', privateArea, team.deleteTeam);

module.exports = router;