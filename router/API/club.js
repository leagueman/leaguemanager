const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {club, user, team} = require('../../database/controllers');

const getClubs = (req,res)=>{
    club
        .getClubs()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getClub = (req,res)=>{
    club
        .getClub(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const getClubOfficials = (req,res)=>{
    user
        .getUsers({club:req.params.id, is_club_official:true})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const newClub = (req,res)=>{
    club
        .newClub(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const replaceClub = (req,res)=>{
    club
        .replaceClub(req.body._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))   
}

const updateClub = (req,res)=>{
    club
        .updateClub(req.body._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))   
}

const deleteClub = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getClubs);
router.get('/:id', publicArea, getClub);
router.get('/:id/officials', publicArea, getClubOfficials);
router.post('/', publicArea, newClub);
router.put('/:id', privateArea, replaceClub);
router.patch('/:id', privateArea, updateClub);
router.delete('/:id', privateArea, deleteClub);

module.exports = router;