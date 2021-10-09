const express = require('express');
const router = express.Router();
const db = require('../db/db')

/* Create job . */
router.post('/', function(req, res, next) {
  // TODO:: create job with pending status and fire jobCreated event
  res.send('respond with a resource');
});

/* GET job details. */
router.get('/:jobId', function(req, res, next) {
  // TODO:: get job by Id
  res.send('respond with a resource');
});


module.exports = router;
