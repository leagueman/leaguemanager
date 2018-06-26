const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {organisation} = require('../../database/controllers/');

const getOrganisations = (req, res, next)=>{
    organisation
        .getOrganisations({})
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const getOrganisation = (req, res, next)=>{
    organisation 
        .getOrganisation(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const newOrganisation = (req, res, next)=>{
    organisation
        .newOrganisation(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const replaceOrganisation = (req, res, next)=>{
    res.redirect('/')
}

const updateOrganisation = (req, res, next)=>{
    res.redirect('/')
}

const deleteOrganisation = (req, res, next)=>{
    res.redirect('/')
}

router.use((req, res, next)=>{
    console.log("Organisation route middleware stub")
    next()
})

router.get('/', publicArea, getOrganisations);
router.get('/:id', publicArea, getOrganisation);
router.post('/', publicArea, newOrganisation);
router.put('/:id', publicArea, replaceOrganisation);
router.patch('/:id', publicArea, updateOrganisation);
router.delete('/:id', publicArea, deleteOrganisation);

module.exports = router;