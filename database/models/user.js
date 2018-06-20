const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    email: String,
    password: String,
    jwt: String,
    last_signed_in: Date,
    is_admin: Boolean,
    is_club_official: Boolean,
    team:  {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
    club:  {type: mongoose.Schema.Types.ObjectId, ref: 'club'},
    organisation:  {type: mongoose.Schema.Types.ObjectId, ref: 'organisation'},
})

module.exports = mongoose.model('user', Schema);