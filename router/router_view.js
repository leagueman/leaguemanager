const express = require('express');
const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

router.use('/signin', publicArea, require('./routes/signin') )
router.use('/signout', publicArea, require('./routes/signout') )
router.use('/register', publicArea, require('./routes/register'))
router.use('/dashboard', privateArea, require('./routes/dashboard'))
router.use('/myteam', privateArea, require('./routes/myteam'))

router.use('/', publicArea, (req,res)=>{
    res.render(`${__root}/views/index.ejs`, {user:req.user|| null})
});

module.exports = router;
