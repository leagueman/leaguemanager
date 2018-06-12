const express = require('express');
const byID = require('./byID');
const {getUsers} = require('../models/user');
const router = express.Router();

const publicArea = (req,res,next) => next()
const privateArea = (req,res,next) => next()


router.use('/id', byID);

router.get('/users', privateArea, getUsers)


router.get('/', (req,res)=>{
    res.json({title:"League Manager"});
});

module.exports = router;