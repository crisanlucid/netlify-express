'use strict';
var express = require('express');
var router = express.Router();

/* GET resumes listing. */

router.get('/', function(req, res, next) {
  return res.json(['data']);
});
