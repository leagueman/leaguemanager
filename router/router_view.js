const express = require('express');
const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

router.use('/', publicArea, (req,res)=>{
    res.send("Homepage")
    // res.render('../views/index.ejs', {title:'Homepage'});
});

module.exports = router;