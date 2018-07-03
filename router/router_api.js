const express = require('express');
const {Authenticate} = require('../auth/passport');

const router = express.Router();

router.use('/club', require('./API/club'));
router.use('/competition', require('./API/competition'));
router.use('/division', require('./API/division'));
router.use('/fixture', require('./API/fixture'));
router.use('/league', require('./API/league'));
router.use('/organisation', require('./API/organisation'));
router.use('/player', require('./API/player'));
router.use('/referee', require('./API/referee'));
router.use('/score', require('./API/score'));
router.use('/team', require('./API/team'));
router.use('/user', Authenticate, require('./API/user'));
router.use('/venue', require('./API/venue'));

router.use('/', (req,res)=>{
     res.json({title:"League Manager"});
});

module.exports = router;