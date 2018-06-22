const express = require('express');
const router = express.Router();
const {getToken} = require('../../auth/authorisation');

router.get('/',  (req, res)=>{ 
    res.clearCookie('token', getToken(req))
    res.redirect('/')
});

module.exports = router;
