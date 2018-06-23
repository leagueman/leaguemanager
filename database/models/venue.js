const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    location: {
        longitude: String,
        latitude: String
    },
    club: {type: ObjectId, ref: 'club'},
})

module.exports = mongoose.model('venue', Schema);