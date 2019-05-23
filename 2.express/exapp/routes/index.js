var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hellow!!!' });//index指/view下的index.js
});

module.exports = router;
