const mongoose = require('../database');
const {competition} = require('./')
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    promoted_teams: Number,
    relegated_teams: Number,
    competition: {type: ObjectId, ref: 'competition'},
    divisions: [ {type: ObjectId, ref: 'division'} ]
})

module.exports = mongoose.model('league', Schema);