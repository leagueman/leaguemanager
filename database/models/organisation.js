const mongoose = require('../database')
const club = require('./club');
const {ObjectId} = mongoose.Schema.Types
const Schema = new mongoose.Schema({
    title: String,
    clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'club'} ],
    competitions: [ {type: ObjectId, ref: 'competition'} ],
    users: [ {type: ObjectId, ref: 'user'} ],
    referees: [ {type: ObjectId, ref: 'referee'} ],
})

module.exports = mongoose.model('organisation', Schema);