const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    title_short: String,
    primary_color: String,
    division:  {type: mongoose.Schema.Types.ObjectId, ref: 'division'},
    club: {type: mongoose.Schema.Types.ObjectId, ref: 'club'},
    manager: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    players: [ {type: mongoose.Schema.Types.ObjectId, ref: 'player'} ],
    users:  [ {type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
})

module.exports = mongoose.model('team', Schema);