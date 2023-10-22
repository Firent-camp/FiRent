import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface MyRequest extends Request {
  user?: {
    firebaseId: string;
  };
}



export default async function getChatMessagesByChatId(req: MyRequest, res: Response) {
  try {
    // Get the chat ID from the request.
    const chatId: number = Number(req.params.chatId);

    if (isNaN(chatId)) {
      return res.status(400).json({ error: "Invalid chatId" });
    }

    // Retrieve messages for the specified chatId.
    const messages = await prisma.message.findMany({
      where: {
        chatId,
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
    const participants = [userId, otherUserId].filter((id) => id !== undefined);

    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            firebaseId: { in: participants },
          },
        },
      },
    });

    console.log("Participants:", participants);
    console.log("Chat ID result:", chat ? chat.id : "Chat not found");

    return chat ? chat.id : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getUsersInChat(chatId: number): Promise<string[] | null> {
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
      },
      include: {
        participants: {
          select: {
            firebaseId: true,
          },
        },
      },
    });

    if (!chat) {
      return null;
    }

    const participants = chat.participants.map((participant) => participant.firebaseId);

    return participants;
  } catch (error) {
    console.error(error);
    return null;
  }
}




