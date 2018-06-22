const express = require('express');
const router = express.Router();

// const {user} = require('../../database/controllers/')

router.get('/', (req, res)=>{
    res.render(`${__root}/views/myteam`, {user:req.user|| null}) 
});

module.exports = router;