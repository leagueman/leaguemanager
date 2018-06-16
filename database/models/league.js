const mongoose = require('../database');
const {competition} = require('./')

const Schema = new mongoose.Schema({
    title: String,
    short_title: String,
    competition: {type: mongoose.Schema.Types.ObjectId, ref: 'competition'},
    divisions: [ {type: mongoose.Schema.Types.ObjectId, ref: 'division'} ]
})

module.exports = mongoose.model('league', Schema);