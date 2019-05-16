'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var resumesRouter = require('./routes/resume');

app.use(bodyParser.json());

app.use('/.netlify/functions/server', indexRouter, resumesRouter);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
