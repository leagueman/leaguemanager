const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {referee} = require('../../database/controllers/');

const getReferees = (req,res, next)=>{
    referee
        .getReferees()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const getReferee = (req,res, next)=>{
    referee
        .getReferee(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const newReferee = (req,res, next)=>{
    referee
        .newReferee(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const replaceReferee = (req,res, next)=>{
    res.redirect('/')
}

const updateReferee = (req,res, next)=>{
    res.redirect('/')
}

const deleteReferee = (req,res, next)=>{
    res.redirect('/')
}

router.use((req,res,next)=>{
    console.log("Referee route middleware stub")
    next()
})

router.get('/', publicArea, getReferees);
router.get('/:id', publicArea, getReferee);
router.post('/', publicArea, newReferee);
router.put('/:id', privateArea, replaceReferee);
router.patch('/:id', privateArea, updateReferee);
router.delete('/:id', privateArea, deleteReferee);

module.exports = router;