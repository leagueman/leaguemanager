const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Competition} = require('../../database/');

const getCompetitions = (req,res)=>{
    Competition.find({})
        .populate('league')
        .then(templates=>res.send(templates))
        .catch(err=>res.send({error:true, message:err}))
}
const getCompetition = (req,res)=>{
    Competition.findById(req.params.id)
        .populate({ path: 'league', populate: { path: 'divisions' } })
        .then(template=>res.send(template))
        .catch(err=>res.send({error:true, message:err}))
}

const newCompetition = (req,res, next)=>{
    res.redirect('/')
    next()
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