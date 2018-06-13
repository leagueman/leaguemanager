const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model('user', Schema);

const getUsers = (req,res)=>{
    User.find({})
        .then(users=>res.send(users))
        .catch(err=>res.send({error:true, message:"Error getting users"}))
}
const getUser = (req,res)=>{
    User.findById(req.params.id)
        .then(users=>res.send(users))
        .catch(err=>res.send({error:true, message:"Error getting users"}))
}

module.exports = {
    getUsers,
    getUser
}