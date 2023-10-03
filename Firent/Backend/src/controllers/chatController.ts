import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ChatMessage } from '../types/rentfire'; 

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { senderId, receiverId, message }: ChatMessage = req.body;
    const chatMessage = await prisma.chatMessage.create({
      data: {
        senderId,
        receiverId,
        message,
      },
    });

    res.json(chatMessage);
  } catch (error) {
    console.error('Failed to send message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { senderId, receiverId } = req.query as { senderId: string; receiverId: string };
    console.log('senderId:', senderId);
    console.log('receiverId:', receiverId);

    const messages = await prisma.chatMessage.findMany({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
      orderBy: { timestamp: 'asc' },
    });

    res.json(messages);
  } catch (error) {
    console.error('Failed to retrieve messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};



