const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {referee} = require('../../database/');

router.get('/', publicArea, referee.getReferees);
router.get('/:id', publicArea, referee.getReferee);
router.post('/', privateArea, referee.newReferee);
router.put('/:id', privateArea, referee.replaceReferee);
router.patch('/:id', privateArea, referee.updateReferee);
router.delete('/:id', privateArea, referee.deleteReferee);

module.exports = router;