const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Referee = mongoose.model('referee', Schema);

const getReferees = (req,res)=>{
    // Referee.find({})
    //     .then(referees=>res.send(referees))
    //     .catch(err=>res.send({error:true, message:"Error getting referees"}))
    res.send({})
}
const getReferee = (req,res)=>{
    // Referee.findById(req.params.id)
    //     .then(referee=>res.send(referee))
    //     .catch(err=>res.send({error:true, message:"Error getting referee"}))
    res.send({})
}

const newReferee = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceReferee = (req,res)=>{
    res.redirect('/')
}

const updateReferee = (req,res)=>{
    res.redirect('/')
}

const deleteReferee = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getReferees,
    getReferee,
    newReferee,
    replaceReferee,
    updateReferee,
    deleteReferee
}