import express from 'express';
import { sendMessage, getMessages } from "../controllers/chatController";

const router = express.Router();

router.get('/', getMessages);

router.post('/send', sendMessage);

export default router;
