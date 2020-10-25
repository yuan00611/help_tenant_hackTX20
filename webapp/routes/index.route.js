const express = require('express');

const issues = require('./issues.route');
const chats = require('./chats.route');
const files = require('./files.route');

const router = express.Router({ mergeParams: true });

// endpoints
router.use('/issues', issues);
router.use('/chats', chats);
router.use('/files', files);

// this endpoint
router.get('/', (req, res) => res.send("Issues API connection successful"));

module.exports = router;
