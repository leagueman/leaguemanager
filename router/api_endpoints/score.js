const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Score} = require('../../database/');

const getScores = (req,res)=>{
    // Score.find({})
    //     .then(templates=>res.send(templates))
    //     .catch(err=>res.send({error:true, message:"Error getting templates"}))
    res.send({})
}
const getScore = (req,res)=>{
    // Score.findById(req.params.id)
    //     .then(template=>res.send(template))
    //     .catch(err=>res.send({error:true, message:"Error getting template"}))
    res.send({})
}

const newScore = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceScore = (req,res)=>{
    res.redirect('/')
}

const updateScore = (req,res)=>{
    res.redirect('/')
}

const deleteScore = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getScores);
router.get('/:id', publicArea, getScore);
router.post('/', privateArea, newScore);
router.put('/:id', privateArea, replaceScore);
router.patch('/:id', privateArea, updateScore);
router.delete('/:id', privateArea, deleteScore);

module.exports = router;