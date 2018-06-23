const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    date: Date,
    status: String,
    venue: {type: ObjectId, ref: 'venue'},
    competition: {type: ObjectId, ref: 'competition'},
    division: {type: ObjectId, ref: 'division'},
    referee: {type: ObjectId, ref: 'referee'},
    home_team: {type: ObjectId, ref: 'team'},
    away_team: {type: ObjectId, ref: 'team'},
    other_leg_fixture: {type: ObjectId, ref: 'fixture'},
    score: {type: ObjectId, ref: 'score'},
    time_slot: {type: ObjectId, ref: 'time_slot'},
})

module.exports = mongoose.model('fixture', Schema);