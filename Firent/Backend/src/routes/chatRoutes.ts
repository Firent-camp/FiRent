// routes.ts
import { Router, Request, Response } from "express";
import getChatMessagesByChatId, { getChatId, getUsersInChat } from "../controllers/chatController";

const router = Router();

router.get("/:chatId/messages", getChatMessagesByChatId);

router.get("/:userId/:otherUserId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const otherUserId = req.params.otherUserId;
  const chatId = await getChatId(userId, otherUserId);
  res.json({ chatId });
});

router.get("/:chatId/users", async (req: Request, res: Response) => {
  const chatId = parseInt(req.params.chatId);
  const users = await getUsersInChat(chatId);

  if (users === null) {
    return res.status(404).json({ error: "Chat not found" });
  }

  res.json({ users });
});

export default router;
