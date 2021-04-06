var express = require('express');
var assert = require('assert')
var restify = require('restify-clients')
var router = express.Router();

const client = restify.createJSONClient({
  url: 'http://localhost:4000'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.get('/users', (err, reqRestify, resRestify, obj) => {
    assert.ifError(err);
    res.end(JSON.stringify(obj, null, 2))
  })
});

module.exports = router;
