const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {team} = require('../../database/controllers/');

const getTeams = (req,res)=>{
    team
        .getTeams()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getTeam = (req,res)=>{
    team
        .getTeam(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

// const getTeamFixtures = (req,res)=>{
//     team
//         .getTeamFixtures(req.params.id)
//         .then(data=>res.status(200).json(data))
//         .catch(err=>res.status(500).json({error:true, message:err}))    
// }


const newTeam = (req,res)=>{
    team
        .newTeam(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
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
// router.get('/:id/fixtures', publicArea, getTeamFixtures);
router.post('/', publicArea, newTeam);
router.put('/:id', publicArea, replaceTeam);
router.patch('/:id', publicArea, updateTeam);
router.delete('/:id', publicArea, deleteTeam);

module.exports = router;