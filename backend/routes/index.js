var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.sendFile(path.join(__dirname, '../dist/index.html'))
  res.sendFile(path.join(__dirname, '../../frontend/.next/server/pages/index.html'))
});

module.exports = router;