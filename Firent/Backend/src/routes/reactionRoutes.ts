const express = require('express');

import * as reactionController from "../controllers/reactioncontroller";

const router = express.Router({ mergeParams: true });
router.post('/', reactionController.likePost);
router.get('/', reactionController.getthreadLikes)
router.delete('/', reactionController.unlikethread)
export default router