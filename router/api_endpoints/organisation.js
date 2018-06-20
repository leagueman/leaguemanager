const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {organisation} = require('../../database/controllers/');

const getOrganisations = (req,res)=>{
    organisation
        .find({})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getOrganisation = (req,res)=>{
    organisation 
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}




const newOrganisation = (req,res)=>{
    res.redirect('/')
}

const replaceOrganisation = (req,res)=>{
    res.redirect('/')
}

const updateOrganisation = (req,res)=>{
    res.redirect('/')
}

const deleteOrganisation = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getOrganisations);
router.get('/:id', publicArea, getOrganisation);
router.post('/', privateArea, newOrganisation);
router.put('/:id', privateArea, replaceOrganisation);
router.patch('/:id', privateArea, updateOrganisation);
router.delete('/:id', privateArea, deleteOrganisation);

module.exports = router;