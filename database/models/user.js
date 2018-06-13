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
        .then(user=>res.send(user))
        .catch(err=>res.send({error:true, message:"Error getting user"}))
}

const newUser = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceUser = (req,res)=>{
    res.redirect('/')
}

const updateUser = (req,res)=>{
    res.redirect('/')
}

const deleteUser = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getUsers,
    getUser,
    newUser,
    replaceUser,
    updateUser,
    deleteUser
}