const express = require('express');

const router = express.Router({ mergeParams: true });

const auth = require('../auth');

const mysql = require('mysql');

let connection = mysql.createConnection(auth);

router.route('/all')
    .get(function (req, res) {

    	//var issues = ""

    	connection.query("select * from chats;",
    		function(error, results, fields) {
		        if (error) {
		        	throw error;
		        }
		        res.send(results);
      		});
    });

router.route('/new')
    .post(function (req, res) {
    	res.send("req" + req);
    });

module.exports = router;
