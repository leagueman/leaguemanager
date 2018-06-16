const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Template} = require('../../database/');

const getTemplates = (req,res)=>{
    // Template.find({})
    //     .then(templates=>res.send(templates))
    //     .catch(err=>res.send({error:true, message:"Error getting templates"}))
    res.send({})
}
const getTemplate = (req,res)=>{
    // Template.findById(req.params.id)
    //     .then(template=>res.send(template))
    //     .catch(err=>res.send({error:true, message:"Error getting template"}))
    res.send({})
}

const newTemplate = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceTemplate = (req,res)=>{
    res.redirect('/')
}

const updateTemplate = (req,res)=>{
    res.redirect('/')
}

const deleteTemplate = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getTemplates);
router.get('/:id', publicArea, getTemplate);
router.post('/', privateArea, newTemplate);
router.put('/:id', privateArea, replaceTemplate);
router.patch('/:id', privateArea, updateTemplate);
router.delete('/:id', privateArea, deleteTemplate);

module.exports = router;