const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    email: String,
    password: String,
    jwt: String,
    last_signed_in: Date,
    isAdmin: Boolean,
    isClubOfficial: Boolean,
    isLeagueSecretary: Boolean,
    isReferee: Boolean,
    isTeamManager: Boolean,
    isMember: Boolean,
    team:  {type: ObjectId, ref: 'team'},
    club:  {type: ObjectId, ref: 'club'},
    organisation:  {type: ObjectId, ref: 'organisation'},
})

module.exports = mongoose.model('user', Schema);