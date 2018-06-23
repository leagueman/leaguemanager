const express = require('express');
const {publicArea, privateArea} = require('../auth/authorisation');

const router = express.Router();

router.use('/club', publicArea, require('./API/club'));
router.use('/competition', publicArea, require('./API/competition'));
router.use('/division', publicArea, require('./API/division'));
router.use('/fixture', publicArea, require('./API/fixture'));
router.use('/league', publicArea, require('./API/league'));
router.use('/organisation', publicArea, require('./API/organisation'));
router.use('/player', publicArea, require('./API/player'));
router.use('/referee', publicArea, require('./API/referee'));
router.use('/score', publicArea, require('./API/score'));
router.use('/team', publicArea, require('./API/team'));
router.use('/user', publicArea, require('./API/user'));
router.use('/venue', publicArea, require('./API/venue'));

router.use('/', (req,res)=>{
     res.json({title:"League Manager"});
});

module.exports = router;