const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {team} = require('../../database/controllers/');

const getTeams = (req,res)=>{
    team
        .find()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getTeam = (req,res)=>{
    team
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}


const newTeam = (req,res)=>{
    res.redirect('/')
}

const replaceTeam = (req,res)=>{
    res.redirect('/')
}

const updateTeam = (req,res)=>{
    res.redirect('/')
}

const deleteTeam = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getTeams);
router.get('/:id', publicArea, getTeam);
router.post('/', privateArea, newTeam);
router.put('/:id', privateArea, replaceTeam);
router.patch('/:id', privateArea, updateTeam);
router.delete('/:id', privateArea, deleteTeam);

module.exports = router;