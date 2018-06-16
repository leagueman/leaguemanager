const mongoose = require('../database');

const Schema = new mongoose.Schema({
    time: String,
    status: String,
    venue: {type: mongoose.Schema.Types.ObjectId, ref: 'venue'},
    competition: {type: mongoose.Schema.Types.ObjectId, ref: 'competition'},
    division: {type: mongoose.Schema.Types.ObjectId, ref: 'division'},
    referee: {type: mongoose.Schema.Types.ObjectId, ref: 'referee'},
    home_team: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
    away_team: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
    other_leg_fixture: {type: mongoose.Schema.Types.ObjectId, ref: 'fixture'},
    score: {type: mongoose.Schema.Types.ObjectId, ref: 'score'},
})

module.exports = mongoose.model('fixture', Schema);