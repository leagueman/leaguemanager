const express = require('express');
const endpoints = require('./api_endpoints/');
const {publicArea, privateArea} = require('../auth/authorisation');

const router = express.Router();

router.use('/club', publicArea, endpoints.club);
router.use('/competition', publicArea, endpoints.competition);
router.use('/division', publicArea, endpoints.division);
router.use('/fixture', publicArea, endpoints.fixture);
router.use('/league', publicArea, endpoints.league);
router.use('/organisation', publicArea, endpoints.organisation);
router.use('/player', publicArea, endpoints.player);
router.use('/referee', publicArea, endpoints.referee);
router.use('/score', publicArea, endpoints.score);
router.use('/team', publicArea, endpoints.team);
router.use('/user', publicArea, endpoints.user);
router.use('/venue', publicArea, endpoints.venue);

router.get('/', (req,res)=>{
    res.json({title:"League Manager"});
});

module.exports = router;