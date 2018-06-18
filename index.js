const dotenv = require('dotenv').config()
const express = require("express");
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const router = require('./router/');
const logger = require('morgan');

const app = express()

app.use( express.static(`${__dirname}/public`) );
app.use( favicon(`${__dirname}/public/favicon.ico`) );
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


let port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log("Server started on port " + port);
    require('./tests')();
});

module.exports = app