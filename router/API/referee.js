const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {referee} = require('../../database/controllers/');

const getReferees = (req,res)=>{
    referee
        .getReferees()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}


const getReferee = (req,res)=>{
    referee
        .getReferee(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}




const newReferee = (req,res)=>{
    referee
        .newReferee(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const replaceReferee = (req,res)=>{
    res.redirect('/')
}

const updateReferee = (req,res)=>{
    res.redirect('/')
}

const deleteReferee = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getReferees);
router.get('/:id', publicArea, getReferee);
router.post('/', publicArea, newReferee);
router.put('/:id', privateArea, replaceReferee);
router.patch('/:id', privateArea, updateReferee);
router.delete('/:id', privateArea, deleteReferee);

module.exports = router;