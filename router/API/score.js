const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {score} = require('../../database/controllers/');

const getScores = (req, res, next)=>{
    res.redirect('/')
}
const getScore = (req, res, next)=>{
    res.redirect('/')
}



const newScore = (req, res, next)=>{
    res.redirect('/')
}

const replaceScore = (req, res, next)=>{
    res.redirect('/')
}

const updateScore = (req, res, next)=>{
    res.redirect('/')
}

const deleteScore = (req, res, next)=>{
    res.redirect('/')
}

router.use((req,res,next)=>{
    console.log("Score route middleware stub")
    next()
})

router.get('/', publicArea, getScores);
router.get('/:id', publicArea, getScore);
router.post('/', privateArea, newScore);
router.put('/:id', privateArea, replaceScore);
router.patch('/:id', privateArea, updateScore);
router.delete('/:id', privateArea, deleteScore);

module.exports = router;