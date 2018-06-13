const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Template = mongoose.model('template', Schema);

const getTemplates = (req,res)=>{
    // Template.find({})
    //     .then(templates=>res.send(templates))
    //     .catch(err=>res.send({error:true, message:"Error getting templates"}))
    res.send({})
}
const getTemplate = (req,res)=>{
    // Template.findById(req.params.id)
    //     .then(template=>res.send(template))
    //     .catch(err=>res.send({error:true, message:"Error getting template"}))
    res.send({})
}

const newTemplate = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceTemplate = (req,res)=>{
    res.redirect('/')
}

const updateTemplate = (req,res)=>{
    res.redirect('/')
}

const deleteTemplate = (req,res)=>{
    res.redirect('/')
}

module.exports = {
    getTemplates,
    getTemplate,
    newTemplate,
    replaceTemplate,
    updateTemplate,
    deleteTemplate
}