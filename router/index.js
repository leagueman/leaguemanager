const express = require('express');
const router_api = require('./router_api');
const router_view = require('./router_view');

const apiVerification = (req,res,next)=>{
    next()
}

const viewVerification = (req,res,next)=>{
    next()
}

const router = express.Router();

router.use('/api', apiVerification, router_api);
router.use('/', viewVerification, router_view);

router.use((req,res)=>{
    res.send(404);
});

module.exports = router;