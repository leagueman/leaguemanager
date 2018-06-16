const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Organisation} = require('../../database/');

const getOrganisations = (req,res)=>{
    // Organisation.find({})
    //     .then(organisations=>res.send(organisations))
    //     .catch(err=>res.send({error:true, message:"Error getting organisations"}))
    res.send({})
}
const getOrganisation = (req,res)=>{
    // Organisation.findById(req.params.id)
    //     .then(organisation=>res.send(organisation))
    //     .catch(err=>res.send({error:true, message:"Error getting organisation"}))
    res.send({})
}

const newOrganisation = (req,res, next)=>{
    res.redirect('/')
    next()
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