const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    user:  {type: ObjectId, ref: 'user'},
    team:  {type: ObjectId, ref: 'team'},
})

module.exports = mongoose.model('player', Schema);