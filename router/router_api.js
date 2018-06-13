const express = require('express');
const byID = require('./byID');
const {users} = require('../database/');
const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

router.use('/id', byID);

router.get('/users', privateArea, users.getUsers)
router.get('/users/:id', privateArea, users.getUser)


router.get('/', (req,res)=>{
    res.json({title:"League Manager"});
});

module.exports = router;