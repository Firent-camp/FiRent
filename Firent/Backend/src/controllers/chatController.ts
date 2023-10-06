import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createConversation = async (req:Request, res:Response) => {
  try {
    const { user1Id, user2Id } = req.body;
    console.log(user1Id,"user1",user2Id,"user2");
    

    const existingConversation = await prisma.chat.findFirst({
      where: {
        users: {
          some: {
            firebaseId: user1Id, 
          },
        },
        AND: {
          users: {
            some: {
              firebaseId: user2Id,
            },
          },
        },
      },
    });

    if (existingConversation) {
      res.status(200).json(existingConversation);
      return;
    }

    const newConversation = await prisma.chat.create({
      data: {
        users: {
          connect: [
            { firebaseId: user1Id },
            { firebaseId: user2Id },
          ],
        },
      },
      include: {
        users: true,
      },
    });

    res.status(201).json(newConversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.sendMessage = async (req:Request, res:Response) => {
  try {
    const { chat, sender, content } = req.body;

    const newMessage = await prisma.Message.create({
      data: {
        content,
        sender,
        chat,
      },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getConversationMessages = async (req:Request, res:Response) => {
  try {
    const chatId = req.params.chatId;

    const messages = await prisma.Message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

