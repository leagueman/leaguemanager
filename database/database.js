const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`);

module.exports = mongoose