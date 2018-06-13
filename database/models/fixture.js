const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Fixture = mongoose.model('fixture', Schema);

const getFixtures = (req,res)=>{
    // Fixture.find({})
    //     .then(fixtures=>res.send(fixtures))
    //     .catch(err=>res.send({error:true, message:"Error getting fixtures"}))
    res.send({})
}
const getFixture = (req,res)=>{
    // Fixture.findById(req.params.id)
    //     .then(fixture=>res.send(fixture))
    //     .catch(err=>res.send({error:true, message:"Error getting fixture"}))
    res.send({})
}

const newFixture = (req,res, next)=>{
    res.redirect('/')
    next()
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

module.exports = {
    getFixtures,
    getFixture,
    newFixture,
    replaceFixture,
    updateFixture,
    deleteFixture
}