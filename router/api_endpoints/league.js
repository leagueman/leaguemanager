const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {League} = require('../../database/');


const getLeagues = (req,res)=>{
    League.find({})
        .populate('divisions')
        .then(leagues=>res.send(leagues))
        .catch(err=>res.send({error:true, message:"Error getting leagues"}))
    // res.send({})
}
const getLeague = (req,res)=>{
    League.findById(req.params.id)
        .populate('divisions')
        .then(league=>res.send(league))
        .catch(err=>res.send({error:true, message:err}))
    // res.send({})
}

const newLeague = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceLeague = (req,res)=>{
    res.redirect('/')
}

const updateLeague = (req,res)=>{
    res.redirect('/')
}

const deleteLeague = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getLeagues);
router.get('/:id', publicArea, getLeague);
router.post('/', privateArea, newLeague);
router.put('/:id', privateArea, replaceLeague);
router.patch('/:id', privateArea, updateLeague);
router.delete('/:id', privateArea, deleteLeague);

module.exports = router;