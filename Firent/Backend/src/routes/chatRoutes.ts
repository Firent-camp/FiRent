import { Router } from 'express';
const router = Router();
const conversationController = require('../controllers/chatController');

router.post('/conversations', conversationController.createConversation);

router.post('/conversations/:conversationId/messages', conversationController.sendMessage);

router.get('/conversations/:conversationId/messages', conversationController.getConversationMessages);

export default router;
