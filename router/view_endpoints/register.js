const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');

router.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/register.html`)
});

module.exports = router;