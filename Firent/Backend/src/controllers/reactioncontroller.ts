import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

type ReactionType = 'LIKE' | 'LOVE' | 'LAUGH' | 'SAD' | 'ANGRY';

interface ReactionRequestBody {
  userId: string;
  type: ReactionType;
}

exports.addOrUpdateReaction = async (req: Request, res: Response) => {
  const { userId, type }: ReactionRequestBody = req.body;
  const { threadId } = req.params;

  try {
    const existingReaction = await prisma.reaction.findFirst({
      where: {
        userId: userId,
        threadId: parseInt(threadId, 10)
      }
    });

    if (existingReaction) {
      if (existingReaction.type !== type) {
        await prisma.reaction.update({
          where: { id: existingReaction.id },
          data: { type: type }
        });
      } else {
        await prisma.reaction.delete({ where: { id: existingReaction.id } });
      }
    } else {
      await prisma.reaction.create({
        data: {
          userId: userId,
          threadId: parseInt(threadId, 10),
          type: type
        }
      });
    }

    const likeCount = await prisma.reaction.count({
      where: { threadId: parseInt(threadId, 10), type: 'LIKE' }
    });

    res.json({ message: 'Reaction updated successfully!', likeCount });
  } catch (error) {
    console.error('Error handling reaction:', error);
res.status(500).json({ error: 'Failed to handle reaction.', details: error.message });
  }
};
