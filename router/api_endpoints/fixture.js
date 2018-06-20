const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {fixture} = require('../../database/controllers/');

const getFixtures = (req,res)=>{
    res.redirect('/')
}

const getFixture = (req,res)=>{
    res.redirect('/')
}

const newFixture = (req,res)=>{
    res.redirect('/')
}

const replaceFixture = (req,res)=>{
    res.redirect('/')
}

const updateFixture = (req,res)=>{
    res.redirect('/')
}

const deleteFixture = (req,res)=>{
    res.redirect('/')
}

router.get('/', publicArea, getFixtures);
router.get('/:id', publicArea, getFixture);
router.post('/', privateArea, newFixture);
router.put('/:id', privateArea, replaceFixture);
router.patch('/:id', privateArea, updateFixture);
router.delete('/:id', privateArea, deleteFixture);

module.exports = router;