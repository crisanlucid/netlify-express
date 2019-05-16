'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
;
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: '[Express] Server Page'});
});

router.get('/api/v1/resume', function(req, res, next) {
  return res.json(['data']);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
