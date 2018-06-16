const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Venue} = require('../../database/');

const getVenues = (req,res)=>{
    // Venue.find({})
    //     .then(venues=>res.send(venues))
    //     .catch(err=>res.send({error:true, message:"Error getting venues"}))
    res.send({})
}
const getVenue = (req,res)=>{
    // Venue.findById(req.params.id)
    //     .then(venue=>res.send(venue))
    //     .catch(err=>res.send({error:true, message:"Error getting venue"}))
    res.send({})
}

const newVenue = (req,res, next)=>{
    res.redirect('/')
    next()
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