const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {player} = require('../../database/');

router.get('/', publicArea, player.getPlayers);
router.get('/:id', publicArea, player.getPlayer);
router.post('/', privateArea, player.newPlayer);
router.put('/:id', privateArea, player.replacePlayer);
router.patch('/:id', privateArea, player.updatePlayer);
router.delete('/:id', privateArea, player.deletePlayer);

module.exports = router;