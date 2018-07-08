const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const Schema = new mongoose.Schema({
    title: String,
    type: String,
    category: String,
    organisation: {type: ObjectId, ref: 'organistaion'},
    league:  {type: ObjectId, ref: 'league'},
    cup:  {type: ObjectId, ref: 'cup'},
    // fixtures:  [{type: ObjectId, ref: 'fixture'}],
})

module.exports = mongoose.model('competition', Schema);