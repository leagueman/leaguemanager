const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {template} = require('../../database/contollers/');

const getTemplates = (req,res)=>{
    res.redirect('/')
}
const getTemplate = (req,res)=>{
    res.redirect('/')
}

const newTemplate = (req,res)=>{
    res.redirect('/')
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