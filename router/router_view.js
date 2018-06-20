const express = require('express');
const endpoints = require('./view_endpoints/');
const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

router.use('/signin', publicArea, endpoints.signin)
router.use('/register', publicArea, endpoints.register)
router.use('/dashboard', privateArea, endpoints.dashboard)

router.use('/', publicArea, (req,res)=>{
    res.sendFile(`${__dirname}/view_endpoints/views/index.html`)
});

module.exports = router;