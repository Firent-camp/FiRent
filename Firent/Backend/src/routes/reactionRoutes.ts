const express = require('express');
const router = express.Router();
const reactionController = require('../controllers/reactionController');

router.post('/threads/:threadId/reactions', reactionController.addOrUpdateReaction);

module.exports = router;