const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    organisation:  {type: ObjectId, ref: 'organisation'},
    user:  {type: ObjectId, ref: 'user'},
})

module.exports = mongoose.model('referee', Schema);