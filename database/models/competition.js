const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    season: String,
    league:  {type: mongoose.Schema.Types.ObjectId, ref: 'league'},
})

module.exports = mongoose.model('competition', Schema);