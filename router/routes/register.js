const express = require('express');
const router = express.Router();
const {alreadySignedIn} = require('../../auth/authorisation');

router.get('/', alreadySignedIn, (req, res)=>{
    res.render(`${__root}/views/register.ejs`)
});

module.exports = router;