// var express = require('express');
// var router = express.Router();

var mysql = require('mysql');

var db = mysql.createConnection({
    user : 'sjc0829',
    host : 'sjc0829-aws-db.cdcrxkou9rdt.ap-northeast-2.rds.amazonaws.com',
    database : 'community',
    password: 'tmdwns95%%',
    port : 3306
})

module.exports = db;