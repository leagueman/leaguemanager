const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Club} = require('../../database/');

const getClubs = (req,res)=>{
    // Club.find({})
    //     .then(templates=>res.send(templates))
    //     .catch(err=>res.send({error:true, message:"Error getting templates"}))
    res.send({})
}
const getClub = (req,res)=>{
    // Club.findById(req.params.id)
    //     .then(template=>res.send(template))
    //     .catch(err=>res.send({error:true, message:"Error getting template"}))
    res.send({})
}

const newClub = (req,res, next)=>{
    res.redirect('/')
    next()
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