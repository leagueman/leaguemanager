const mongoose = require('../database');

const Schema = new mongoose.Schema({
    title: String,
    location: {
        longitude: String,
        latitude: String
    },
    club: {type: mongoose.Schema.Types.ObjectId, ref: 'club'},
})

module.exports = mongoose.model('venue', Schema);