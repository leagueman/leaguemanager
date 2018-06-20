const mongoose = require('../database');

const TableSchema = new mongoose.Schema({
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
})
const Schema = new mongoose.Schema({
    table: [TableSchema],
    division:  {type: mongoose.Schema.Types.ObjectId, ref: 'division'},
})

module.exports = mongoose.model('table', Schema);