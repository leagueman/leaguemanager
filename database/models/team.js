const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Team = mongoose.model('team', Schema);

const getTeams = (req,res)=>{
    // Team.find({})
    //     .then(teams=>res.send(teams))
    //     .catch(err=>res.send({error:true, message:"Error getting teams"}))
    res.send({})
}
const getTeam = (req,res)=>{
    // Team.findById(req.params.id)
    //     .then(team=>res.send(team))
    //     .catch(err=>res.send({error:true, message:"Error getting team"}))
    res.send({})
}

const newTeam = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceTeam = (req,res)=>{
    res.redirect('/')
}

const updateTeam = (req,res)=>{
    res.redirect('/')
}

const deleteTeam = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getTeams,
    getTeam,
    newTeam,
    replaceTeam,
    updateTeam,
    deleteTeam
}