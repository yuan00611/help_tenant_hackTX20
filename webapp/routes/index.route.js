const express = require('express');

const issues = require('./issues.route');

const router = express.Router({ mergeParams: true });

// endpoints
router.use('/issues', issues);

// this endpoint
router.get('/', (req, res) => res.send("Sample response"));

module.exports = router;
