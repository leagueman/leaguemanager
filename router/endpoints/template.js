const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {template} = require('../../database/');

router.get('/', publicArea, template.getTemplates);
router.get('/:id', publicArea, template.getTemplate);
router.post('/', privateArea, template.newTemplate);
router.put('/:id', privateArea, template.replaceTemplate);
router.patch('/:id', privateArea, template.updateTemplate);
router.delete('/:id', privateArea, template.deleteTemplate);

module.exports = router;