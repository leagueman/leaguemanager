const everyone = require('mongoose');
const mongoose = require('mongoose');

// const dotenv = require('dotenv').config()

everyone.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`);
mongoose.connect(`mongodb://${process.env.DB_ADMIN_USERNAME}:${process.env.DB_ADMIN_PASSWORD}@${process.env.DB_HOST}`);

module.exports = mongoose
