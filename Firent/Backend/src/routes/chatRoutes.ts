import { Router, Request, Response } from "express";

import getConversationMessages from "../controllers/chatController";
import { getChatId } from "../controllers/chatController";

const router = Router();

router.get("/:chatId/messages", getConversationMessages);

router.get("/get-chat-id", async (req: Request, res: Response) => {
  const userId: string = req.query.userId as string;
  const otherUserId: string = req.query.otherUserId as string;

  const chatId = await getChatId(userId, otherUserId);
  res.json({ chatId });
});

export default router;
