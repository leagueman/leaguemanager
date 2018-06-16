const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    organisation:  {type: mongoose.Schema.Types.ObjectId, ref: 'organisation'},
})

module.exports = mongoose.model('club', Schema);