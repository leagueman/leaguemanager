const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types

const TableSchema = new mongoose.Schema({
    team: {type: ObjectId, ref: 'team'},
})
const Schema = new mongoose.Schema({
    table: [TableSchema],
    division:  {type: ObjectId, ref: 'division'},
})

module.exports = mongoose.model('table', Schema);