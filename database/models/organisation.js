const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'club'} ],
    competitions: [ {type: mongoose.Schema.Types.ObjectId, ref: 'competition'} ],
    users: [ {type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
    referees: [ {type: mongoose.Schema.Types.ObjectId, ref: 'referee'} ],
})

module.exports = mongoose.model('organisation', Schema);