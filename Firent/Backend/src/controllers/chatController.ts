import { Chat, Message, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface MyRequest extends Request {
  user?: {
    firebaseId: string;
  };
}

export default async function getConversationMessages(req: MyRequest, res: Response) {
  try {
    const chatId: number = Number(req.params.chatId);

    if (isNaN(chatId)) {
      return res.status(400).json({ error: "Invalid chatId" });
    }

    const chat: Chat | null = await prisma.chat.findFirst({
      where: {
        id: chatId,
        participants: {
          some: {
            firebaseId: req.user?.firebaseId,
          },
        },
      },
    });

    if (!chat) {
      return res.status(401).json({ error: "Not authorized to access chat" });
    }

    const messages: Message[] = await prisma.message.findMany({
      where: {
        chatId,
      },
      include: {
        chat: true,
      },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export async function getChatId(userId: string, otherUserId: string): Promise<number | null> {
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            firebaseId: { in: [userId, otherUserId] },
          },
        },
      },
    });

    return chat ? chat.id : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
