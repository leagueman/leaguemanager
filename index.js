const dotenv = require('dotenv').config()
const express = require("express");
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const router = require('./router/');
const logger = require('morgan');
const {attachCORSHeaders} = require('./middleware/')

const app = express()

app.set('views', path.join(__dirname, 'router', 'view_endpoints', 'views'));
app.set('view engine', 'ejs');

app.use( express.static(`${__dirname}/public`) );
app.use( favicon(`${__dirname}/public/favicon.ico`) );
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachCORSHeaders);

global.__root   = __dirname + ''; 
global.__models   = __dirname + '/database/models/'; 
global.__controllers   = __dirname + '/database/controllers/'; 

app.use(router);


let port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log("Server started on port " + port);
    require('./tests')();
});

module.exports = app