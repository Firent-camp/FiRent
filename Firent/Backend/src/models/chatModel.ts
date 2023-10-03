import { PrismaClient } from '@prisma/client';
import { ChatMessage } from '../types/rentfire';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const chatData: ChatMessage = req.body;
    const chatMessage = await prisma.chatMessage.create({
      data: chatData,
    });
    res.json(chatMessage);
  } catch (error) {
    console.error('Failed to send message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
      const senderId = req.query.senderId as string;
      const receiverId = req.query.receiverId as string;
  
      const messages = await prisma.chatMessage.findMany({
        where: {
          
        },
      });
      res.json(messages);
    } catch (error) {
      console.error('Failed to retrieve messages:', error);
      res.status(500).json({ error: 'Failed to retrieve messages' });
    }
  };
  
