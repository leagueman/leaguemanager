const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Division} = require('../../database/');

const getDivisions = (req,res)=>{
    Division.find({})
        .populate('league')
        .then(divisions=>res.send(divisions))
        .catch(err=>res.send({error:true, message:err}))
}
const getDivision = (req,res)=>{
    Division.findById(req.params.id)
        .populate('league')
        .then(division=>res.send(division))
        .catch(err=>res.send({error:true, message:err}))
}

const newDivision = (req,res,next)=>{
    res.redirect('/')
    next()
}

const replaceDivision = (req,res)=>{
    res.redirect('/')
}

const updateDivision = (req,res)=>{
    res.redirect('/')
}

const deleteDivision = (req,res)=>{
    res.redirect('/')
}



router.get('/', publicArea, getDivisions);
router.get('/:id', publicArea, getDivision);
router.post('/', privateArea, newDivision);
router.put('/:id', privateArea, replaceDivision);
router.patch('/:id', privateArea, updateDivision);
router.delete('/:id', privateArea, deleteDivision);
module.exports = router;