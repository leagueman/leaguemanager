const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {competition} = require('../../database/controllers/');

const getCompetitions = (req,res)=>{
    competition
        .find({})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getCompetition = (req,res)=>{
    competition 
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}





const newCompetition = (req,res)=>{
    res.redirect('/')
}

const replaceCompetition = (req,res)=>{
    res.redirect('/')
}

const updateCompetition = (req,res)=>{
    res.redirect('/')
}

const deleteCompetition = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getCompetitions);
router.get('/:id', publicArea, getCompetition);
router.post('/', privateArea, newCompetition);
router.put('/:id', privateArea, replaceCompetition);
router.patch('/:id', privateArea, updateCompetition);
router.delete('/:id', privateArea, deleteCompetition);

module.exports = router;