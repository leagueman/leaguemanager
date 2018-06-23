const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    refererence:  {type: ObjectId, ref: 'league'},
})

module.exports = mongoose.model('template', Schema);