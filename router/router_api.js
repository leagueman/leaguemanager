const express = require('express');
const byID = require('./byID')
const router = express.Router();


router.use('/id', byID);

router.get('/', (req,res)=>{
    res.json({title:"League Manager"});
});

module.exports = router;