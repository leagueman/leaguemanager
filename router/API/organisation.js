const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {organisation} = require('../../database/controllers/');

const getOrganisations = (req,res)=>{
    organisation
        .getOrganisations({})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const getOrganisation = (req,res)=>{
    organisation 
        .getOrganisation(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const newOrganisation = (req,res)=>{
    organisation
        .newOrganisation(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
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
router.post('/', publicArea, newOrganisation);
router.put('/:id', publicArea, replaceOrganisation);
router.patch('/:id', publicArea, updateOrganisation);
router.delete('/:id', publicArea, deleteOrganisation);

module.exports = router;