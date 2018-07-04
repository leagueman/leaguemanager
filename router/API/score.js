const express = require('express');
const router = express.Router();
const { Authenticate, canUpdateScores } = require('../../auth/passport');
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

router.get('/', getScores);
router.get('/:id', getScore);
router.post('/', Authenticate, canUpdateScores, newScore);
router.put('/:id', Authenticate, canUpdateScores, replaceScore);
router.patch('/:id', Authenticate, canUpdateScores, updateScore);
router.delete('/:id', Authenticate, canUpdateScores, deleteScore);

module.exports = router;