const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

/*
The slot number will most likely be a constant of an array of time ranges
*/

const Schema = new mongoose.Schema({
    slot: Number,
    date: Date,
    venue:  {type: ObjectId, ref: 'venue'},
    fixture: {type: ObjectId, ref: 'fixture'}
})

module.exports = mongoose.model('time_slot', Schema);