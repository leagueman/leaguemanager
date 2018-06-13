const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Venue = mongoose.model('venue', Schema);

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

module.exports = {
    getVenues,
    getVenue,
    newVenue,
    replaceVenue,
    updateVenue,
    deleteVenue
}