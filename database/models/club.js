const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    organisation: {type: mongoose.Schema.Types.ObjectId, ref: 'organisation'},
    venues:  [{type: mongoose.Schema.Types.ObjectId, ref: 'venue'}],
    teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'team'}],
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
})

module.exports = mongoose.model('club', Schema);