'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
;
const router = express.Router();


const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

router.get('/api/v1/resume', (req, res) => res.json({ route: req.originalUrl }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
