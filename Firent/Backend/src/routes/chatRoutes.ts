import { Router } from "express";
import getConversationMessages  from "../controllers/chatController";

const router = Router();

router.get("/:chatId/messages", getConversationMessages);

export default router;
