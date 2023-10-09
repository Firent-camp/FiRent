import { Router } from "express";
import chatController from "../controllers/chatController";

const router = Router();

router.post("/", chatController.createConversation);
router.post("/:chatId/message", chatController.sendMessage);
router.get("/:chatId/messages",chatController.getConversationMessages);

export default router;