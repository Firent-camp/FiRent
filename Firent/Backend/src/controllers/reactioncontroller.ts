import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();
import {addLikes, removeLike, getLikes} from "../models/reactionModel"
type ReactionType = 'LIKE' | 'LOVE' | 'LAUGH' | 'SAD' | 'ANGRY';

interface ReactionRequestBody {
  userId: string;
  type: ReactionType;
}

// export const addOrUpdateReaction = async (req: Request, res: Response) => {
//   const { userId, type }: ReactionRequestBody = req.body;
//   const { threadId } = req.params;

//   try {
//     const existingReaction = await prisma.reaction.findFirst({
//       where: {
//         userId: userId,
//         threadId: parseInt(threadId, 10)
//       }
//     });


//     const likeCount = await prisma.reaction.count({
//       where: { threadId: parseInt(threadId, 10) }
//     });

//     res.json({ message: 'Reaction updated successfully!', likeCount });
//   } catch (error) {
//     console.error('Error handling reaction:', error);
// res.status(500).json({ error: 'Failed to handle reaction.', details: error.message });
//   }
// };

// export const GetReaction = async (req: Request, res: Response) => {
//   const { threadId } = req.params;

//   try {
//     const existingReaction = await prisma.reaction.findMany({
//       where: {
   
//         threadId: parseInt(threadId, 10)
//       }
//     });




//     res.json({ message: 'Reaction updated successfully!', existingReaction });
//   } catch (error) {
//     console.error('Error handling reaction:', error);
// res.status(500).json({ error: 'Failed to handle reaction.', details: error.message });
//   }
// };

export const likePost = async (req: Request, res: Response) => {
  try {
    const likeData = {
      userId: req.body.user,  // Make sure it aligns with the request payload
      threadId: parseInt(req.body.thread, 10)  // Ensure it's an integer
    };
    console.log('likeData in controller:', likeData);
    const newLike = await addLikes(likeData);
    res.status(201).json(newLike);
  } catch (error) {
    console.error('Error while liking the post:', error);
    res.status(500).json({ error: 'Failed to like the post.' });
  }
};

export const getthreadLikes = async (req: Request, res: Response) => {
  try {
    const threadId = parseInt(req.params.threadId, 10);
    const likes = await getLikes(threadId);
    res.status(200).json(likes);
  } catch (error) {
    console.error('Error while fetching likes:', error);
    res.status(500).json({ error: 'Failed to fetch likes.' });
  }
};

export const unlikethread = async (req: Request, res: Response) => {
  try {
    const likeData = {
      userId: req.body.userId,  // changed from user to userId
      threadId: parseInt(req.params.threadId, 10)  // ensuring it's an integer
    };
    const removedLike = await removeLike(likeData);
    res.status(200).json(removedLike);
  } catch (error) {
    console.error('Error while unliking the thread:', error);
    res.status(500).json({ error: 'Failed to unlike the thread.' });
  }
};
