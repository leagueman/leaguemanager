const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {club} = require('../../database/controllers/');

const getClubs = (req,res)=>{
    club
        .find()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getClub = (req,res)=>{
    club
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const newClub = (req,res)=>{
    res.redirect('/')
}

const replaceClub = (req,res)=>{
    res.redirect('/')
}

const updateClub = (req,res)=>{
    res.redirect('/')
}

const deleteClub = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getClubs);
router.get('/:id', publicArea, getClub);
router.post('/', privateArea, newClub);
router.put('/:id', privateArea, replaceClub);
router.patch('/:id', privateArea, updateClub);
router.delete('/:id', privateArea, deleteClub);

module.exports = router;