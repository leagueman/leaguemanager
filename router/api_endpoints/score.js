const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {score} = require('../../database/controllers/');

const getScores = (req,res)=>{
    res.redirect('/')
}
const getScore = (req,res)=>{
    res.redirect('/')
}



const newScore = (req,res)=>{
    res.redirect('/')
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