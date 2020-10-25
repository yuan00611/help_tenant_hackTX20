const express = require('express');

const router = express.Router({ mergeParams: true });

router.route('/all')
    .get(function (req, res) {
    	res.send(
    		[
    			{
    				"timestamp": 100,
    				"message": "test",
    				"user": "darren",
    				"count": 10,
    				"solved": "T"
    			},
    			{
    				"timestamp": 101,
    				"message": "test2",
    				"user": "darren",
    				"count": 1,
    				"solved": "T"
    			}
    		]
    	);
    });

module.exports = router;
