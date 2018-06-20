const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');

router.get('/admin', privateArea, (req, res)=>{
    res.render('admin', {user:req.user.data})
});

router.get('/club', privateArea, (req, res)=>{
    res.render('club', {user:req.user.data})
});

module.exports = router;