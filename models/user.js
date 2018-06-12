const mongoose = require('../db');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model('user', Schema);

const getUsers = (req,res)=>{
    User.findOne({})
        .then(users=>res.send(users))
        .catch(err=>res.send({error:true, message:"Error getting users"}))
}

module.exports = {
    getUsers
}