import { Chat, Message, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface MyRequest extends Request {
  user?: {
    firebaseId: string;
  };
}

export default {
  createConversation: async (req: MyRequest, res: Response) => {
    try {
      const { user1Id, user2Id } = req.body;

      if (!user1Id || !user2Id) {
        return res.status(400).json({ error: "Missing required data" });
      }
      const existingConversation = await prisma.chat.findFirst({
        where: {
          AND: [
            { users: { some: { firebaseId: user1Id } } },
            { users: { some: { firebaseId: user2Id } } },
            { users: { every: { firebaseId: { not: req.user?.firebaseId } } } },
          ],
        },
        include: {
          users: true,
          messages: true,
        },
      });

      if (existingConversation) {
        return res.status(200).json(existingConversation);
      }

      // Create a new chat for these two users
      const newConversation = await prisma.chat.create({
        data: {
          users: {
            connect: [{ firebaseId: user1Id }, { firebaseId: user2Id }],
          },
        },
        include: {
          users: true,
          messages: true,
        },
      });

      res.status(201).json(newConversation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  sendMessage: async (req: MyRequest, res: Response) => {
    try {
      const { chatId, content } = req.body;
  
      if (!chatId || !content) {
        return res.status(400).json({ error: "Missing required data" });
      }
  
      // Check if the authenticated user is part of the chat
      const chat: Chat | null = await prisma.chat.findFirst({
        where: {
          id: chatId,
          users: {
            some: {
              firebaseId: req.user?.firebaseId,
            },
          },
        },
      });
  
      if (!chat) {
        return res.status(401).json({ error: "Not authorized to access chat" });
      }
  
      // Create a new message in the chat without senderId
      const newMessage: Message = await prisma.message.create({
        data: {
          content,
          chat: { connect: { id: chatId } },
        },
      });
  
      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  
  

  getConversationMessages: async (req: MyRequest, res: Response) => {
    try {
      const chatId: number = Number(req.params.chatId);

      if (isNaN(chatId)) {
        return res.status(400).json({ error: "Invalid chatId" });
      }

      // Check if the authenticated user is part of the chat
      const chat: Chat | null = await prisma.chat.findFirst({
        where: {
          id: chatId,
          users: {
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
  },
};