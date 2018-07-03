const express = require('express');
const path = require('path')

const router = express.Router();


router.use('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/front-end/build/index.html'))
});

module.exports = router;
