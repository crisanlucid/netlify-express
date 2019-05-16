'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var resumesRouter = require('./routes/resume');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(bodyParser.json());

app.use('/.netlify/functions/server', indexRouter, resumesRouter);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
