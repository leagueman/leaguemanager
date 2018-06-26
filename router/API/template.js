const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {template} = require('../../database/contollers/');

const getTemplates = (req, res, next)=>{
    res.redirect('/')
}
const getTemplate = (req, res, next)=>{
    res.redirect('/')
}

const newTemplate = (req, res, next)=>{
    res.redirect('/')
}

const replaceTemplate = (req, res, next)=>{
    res.redirect('/')
}

const updateTemplate = (req, res, next)=>{
    res.redirect('/')
}

const deleteTemplate = (req, res, next)=>{
    res.redirect('/')
}

router.use((req,res,next)=>{
    console.log("Template route middleware stub")
    next()
})

router.get('/', publicArea, getTemplates);
router.get('/:id', publicArea, getTemplate);
router.post('/', privateArea, newTemplate);
router.put('/:id', privateArea, replaceTemplate);
router.patch('/:id', privateArea, updateTemplate);
router.delete('/:id', privateArea, deleteTemplate);

module.exports = router;