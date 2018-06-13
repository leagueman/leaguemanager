const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {fixture} = require('../../database/');

router.get('/', publicArea, fixture.getFixtures);
router.get('/:id', publicArea, fixture.getFixture);
router.post('/', privateArea, fixture.newFixture);
router.put('/:id', privateArea, fixture.replaceFixture);
router.patch('/:id', privateArea, fixture.updateFixture);
router.delete('/:id', privateArea, fixture.deleteFixture);

module.exports = router;