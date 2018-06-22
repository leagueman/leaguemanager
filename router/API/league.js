const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {league} = require('../../database/controllers/');


const getLeagues = (req,res)=>{
    league
        .find()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getLeague = (req,res)=>{
    league 
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}









const newLeague = (req,res)=>{
    res.redirect('/')
}

const replaceLeague = (req,res)=>{
    res.redirect('/')
}

const updateLeague = (req,res)=>{
    res.redirect('/')
}

const deleteLeague = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getLeagues);
router.get('/:id', publicArea, getLeague);
router.post('/', privateArea, newLeague);
router.put('/:id', privateArea, replaceLeague);
router.patch('/:id', privateArea, updateLeague);
router.delete('/:id', privateArea, deleteLeague);

module.exports = router;