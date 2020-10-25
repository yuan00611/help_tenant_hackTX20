const express = require('express');
//const bodyParser = require("body-parser");


const router = express.Router({ mergeParams: true });


const auth = require('../auth');

const mysql = require('mysql');

let connection = mysql.createConnection(auth);

router.route('/solved')
    .get(function (req, res) {

    	//var issues = ""

    	connection.query("select * from issues where solved=\"T\" order by timestamp DESC;",
    		function(error, results, fields) {
		        if (error) {
		        	throw error;
		        }
		        res.send(results);
      		});
    })

router.route('/unsolved')
    .get(function (req, res) {

    	connection.query("select * from issues where solved=\"F\" order by timestamp DESC;",
    		function(error, results, fields) {
		        if (error) {
		        	throw error;
		        }
		        res.send(results);
      		});
    })

router.route('/new')
    .post(function (req, res) {
    	var body = req.body;
    	var query = `INSERT INTO issues (message, timestamp, count, solved) VALUES (${body.message}, ${new Date().getTime()}, 1, "F");`
    	var response = connection.query(query);
    	res.send("Success!");
    })

router.route('/plus')
	.post(function (req, res) {
		var body = req.body;
	})

module.exports = router;
