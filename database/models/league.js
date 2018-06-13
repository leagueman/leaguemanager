const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const League = mongoose.model('league', Schema);

const getLeagues = (req,res)=>{
    // League.find({})
    //     .then(leagues=>res.send(leagues))
    //     .catch(err=>res.send({error:true, message:"Error getting leagues"}))
    res.send({})
}
const getLeague = (req,res)=>{
    // League.findById(req.params.id)
    //     .then(league=>res.send(league))
    //     .catch(err=>res.send({error:true, message:"Error getting league"}))
    res.send({})
}

const newLeague = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceLeague = (req,res)=>{
    res.redirect('/')
}

const updateLeague = (req,res)=>{
    res.redirect('/')
}

const deleteLeague = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getLeagues,
    getLeague,
    newLeague,
    replaceLeague,
    updateLeague,
    deleteLeague
}