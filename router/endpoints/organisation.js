const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {organisation} = require('../../database/');

router.get('/', publicArea, organisation.getOrganisations);
router.get('/:id', publicArea, organisation.getOrganisation);
router.post('/', privateArea, organisation.newOrganisation);
router.put('/:id', privateArea, organisation.replaceOrganisation);
router.patch('/:id', privateArea, organisation.updateOrganisation);
router.delete('/:id', privateArea, organisation.deleteOrganisation);

module.exports = router;