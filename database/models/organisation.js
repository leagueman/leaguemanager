const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Organisation = mongoose.model('organisation', Schema);

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

module.exports = {
    getOrganisations,
    getOrganisation,
    newOrganisation,
    replaceOrganisation,
    updateOrganisation,
    deleteOrganisation
}