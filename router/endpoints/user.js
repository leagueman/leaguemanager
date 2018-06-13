const express = require('express');
const router = express.Router();

const {publicArea, privateArea} = require('../../auth/authorisation');
const {user} = require('../../database/');

router.get('/', publicArea, user.getUsers);
router.get('/:id', publicArea, user.getUser);
router.post('/', privateArea, user.newUser);
router.put('/:id', privateArea, user.replaceUser);
router.patch('/:id', privateArea, user.updateUser);
router.delete('/:id', privateArea, user.deleteUser);

module.exports = router;