const mongoose = require('../database');

/*
The slot number will most likely be a constant of an array of time ranges
*/

const Schema = new mongoose.Schema({
    slot: Number,
    venue:  {type: mongoose.Schema.Types.ObjectId, ref: 'venue'},
    fixture: {type: mongoose.Schema.Types.ObjectId, ref: 'fixture'}
})

module.exports = mongoose.model('time_slot', Schema);