const express = require('express');
const path=require('path')

const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

// router.use('/signin', publicArea, require('./routes/signin') )
// router.use('/signout', publicArea, require('./routes/signout') )
// router.use('/register', publicArea, require('./routes/register'))
// router.use('/dashboard', privateArea, require('./routes/dashboard'))
// router.use('/myteam', privateArea, require('./routes/myteam'))

router.use('/', publicArea, (req,res)=>{
    res.sendFile(path.join(__dirname, '/front-end/build/index.html'))
});

module.exports = router;
