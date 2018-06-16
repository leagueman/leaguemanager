const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    user:  {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    team:  {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
})

module.exports = mongoose.model('player', Schema);