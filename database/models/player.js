const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Player = mongoose.model('player', Schema);

const getPlayers = (req,res)=>{
    // Player.find({})
    //     .then(players=>res.send(players))
    //     .catch(err=>res.send({error:true, message:"Error getting players"}))
    res.send({})
}
const getPlayer = (req,res)=>{
    // Player.findById(req.params.id)
    //     .then(player=>res.send(player))
    //     .catch(err=>res.send({error:true, message:"Error getting player"}))
    res.send({})
}

const newPlayer = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replacePlayer = (req,res)=>{
    res.redirect('/')
}

const updatePlayer = (req,res)=>{
    res.redirect('/')
}

const deletePlayer = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getPlayers,
    getPlayer,
    newPlayer,
    replacePlayer,
    updatePlayer,
    deletePlayer
}