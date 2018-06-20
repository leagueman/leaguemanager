const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    league: {type: mongoose.Schema.Types.ObjectId, ref: 'league'},
    teams: [ {type: mongoose.Schema.Types.ObjectId, ref: 'team'} ],
    table: {type: mongoose.Schema.Types.ObjectId, ref: 'table'} ,
})

module.exports = mongoose.model('division', Schema);