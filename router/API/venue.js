const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {venue} = require('../../database/controllers/');

const getVenues = (req, res, next)=>{
    venue
        .getVenues()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}
const getVenue = (req, res, next)=>{
    venue
        .getVenue(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const newVenue = (req, res, next)=>{
    venue
        .newVenue(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const replaceVenue = (req, res, next)=>{
    res.redirect('/')
}

const updateVenue = (req, res, next)=>{
    res.redirect('/')
}

const deleteVenue = (req, res, next)=>{
    res.redirect('/')
}

router.use((req,res,next)=>{
    console.log("Venue route middleware stub")
    next()
})

router.get('/', publicArea, getVenues);
router.get('/:id', publicArea, getVenue);
router.post('/', publicArea, newVenue);
router.put('/:id', publicArea, replaceVenue);
router.patch('/:id', publicArea, updateVenue);
router.delete('/:id', publicArea, deleteVenue);

module.exports = router;