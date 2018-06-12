const express = require('express');
const router = express.Router();

const publicArea = (req,res,next) => next()
const privateArea = (req,res,next) => next()

router.use('/', publicArea, (req,res)=>{
    res.send("Homepage")
    // res.render('../views/index.ejs', {title:'Homepage'});
});

module.exports = router;