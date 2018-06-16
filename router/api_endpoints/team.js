const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Team} = require('../../database/');


const getTeams = (req,res)=>{
    // Team.find({})
    //     .then(teams=>res.send(teams))
    //     .catch(err=>res.send({error:true, message:"Error getting teams"}))
    res.send({})
}
const getTeam = (req,res)=>{
    // Team.findById(req.params.id)
    //     .then(team=>res.send(team))
    //     .catch(err=>res.send({error:true, message:"Error getting team"}))
    res.send({})
}

const newTeam = (req,res, next)=>{
    res.redirect('/')
    next()
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