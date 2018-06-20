const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {venue} = require('../../database/controllers/');

const getVenues = (req,res)=>{
    res.redirect('/')
}
const getVenue = (req,res)=>{
    res.redirect('/')
}

const newVenue = (req,res)=>{
    res.redirect('/')
}

const replaceVenue = (req,res)=>{
    res.redirect('/')
}

const updateVenue = (req,res)=>{
    res.redirect('/')
}

const deleteVenue = (req,res)=>{
    res.redirect('/')
}

router.get('/', publicArea, getVenues);
router.get('/:id', publicArea, getVenue);
router.post('/', privateArea, newVenue);
router.put('/:id', privateArea, replaceVenue);
router.patch('/:id', privateArea, updateVenue);
router.delete('/:id', privateArea, deleteVenue);

module.exports = router;