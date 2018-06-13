const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Division = mongoose.model('division', Schema);

const getDivisions = (req,res)=>{
    // Division.find({})
    //     .then(divisions=>res.send(divisions))
    //     .catch(err=>res.send({error:true, message:"Error getting divisions"}))
    res.status(200).json({})
}
const getDivision = (req,res)=>{
    // Division.findById(req.params.id)
    //     .then(division=>res.send(division))
    //     .catch(err=>res.send({error:true, message:"Error getting division"}))
    res.send({})
}

const newDivision = (req,res,next)=>{
    res.redirect('/')
    next()
}

const replaceDivision = (req,res)=>{
    res.redirect('/')
}

const updateDivision = (req,res)=>{
    res.redirect('/')
}

const deleteDivision = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getDivisions,
    getDivision,
    newDivision,
    replaceDivision,
    updateDivision,
    deleteDivision
}