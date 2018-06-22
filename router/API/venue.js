const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {venue} = require('../../database/controllers/');

const getVenues = (req,res)=>{
    venue
        .getVenues()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getVenue = (req,res)=>{
    venue
        .getVenue(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const newVenue = (req,res)=>{
    venue
        .newVenue(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
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
router.post('/', publicArea, newVenue);
router.put('/:id', publicArea, replaceVenue);
router.patch('/:id', publicArea, updateVenue);
router.delete('/:id', publicArea, deleteVenue);

module.exports = router;