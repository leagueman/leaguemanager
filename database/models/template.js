const mongoose = require('../database');

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    refererence:  {type: mongoose.Schema.Types.ObjectId, ref: 'league'},
})

module.exports = mongoose.model('template', Schema);