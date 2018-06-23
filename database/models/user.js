const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    email: String,
    password: String,
    jwt: String,
    last_signed_in: Date,
    is_admin: Boolean,
    is_club_official: Boolean,
    team:  {type: ObjectId, ref: 'team'},
    club:  {type: ObjectId, ref: 'club'},
    organisation:  {type: ObjectId, ref: 'organisation'},
})

module.exports = mongoose.model('user', Schema);