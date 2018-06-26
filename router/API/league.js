const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {league} = require('../../database/controllers/');


const getLeagues = (req, res, next)=>{
    league
        .getLeagues()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}
const getLeague = (req, res, next)=>{
    league 
        .getLeague(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}









const newLeague = (req, res, next)=>{
    res.redirect('/')
}

const replaceLeague = (req, res, next)=>{
    res.redirect('/')
}

const updateLeague = (req, res, next)=>{
    res.redirect('/')
}

const deleteLeague = (req, res, next)=>{
    res.redirect('/')
}

router.use((req, res, next)=>{
    console.log("League route middleware stub")
    next()
})

router.get('/', publicArea, getLeagues);
router.get('/:id', publicArea, getLeague);
router.post('/', privateArea, newLeague);
router.put('/:id', privateArea, replaceLeague);
router.patch('/:id', privateArea, updateLeague);
router.delete('/:id', privateArea, deleteLeague);

module.exports = router;