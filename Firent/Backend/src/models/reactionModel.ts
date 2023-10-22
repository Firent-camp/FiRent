const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export async function addLikes(likeData: any) {
    console.log('likeData in addLikes:', likeData);
    
    if (!likeData.userId || !likeData.threadId) {
        throw new Error("firebaseId or id is missing from likeData.");
    }

    try {
        const newLike = await prisma.reaction.create({
            data: {
                user: {
                    connect: {
                        firebaseId: likeData.userId,  // Use the value from likeData
                    }
                },
                thread: {
                    connect: {
                        id: likeData.threadId,  // Use the value from likeData
                    }
                }
            }
        });
        return newLike;
    } catch (error) {
        console.error('Error adding like:', error);
        throw error;
    }
}



  
  export async function getLikes(threadId:Number) {
    const likes = await prisma.reaction.findMany({
      where: { threadId: threadId },
    });
  
    const users = await Promise.all(
      likes.map((like:any) =>
        prisma.user.findUnique({
          where: {
             firebaseId: like.userId
             },
        })
      )
    );
  
    const likesWithUsers = likes.map((like:any, index:number) => ({
      ...like,
      user: users[index],
    }));
  
    return likesWithUsers;
  }
  
  
  export async function removeLike(likeData:any) {
    // Ensure that likeData and likeData.id are not undefined or null
    if (likeData && likeData.id) {
      try {
        const removedLike = await prisma.reaction.delete({
          where: {
            id: likeData.id,
          },
        });
        return removedLike;
      } catch (error) {
        console.error('Error while deleting like:', error);
      }
    } else {
      console.error('Invalid likeData:', likeData);
    }
  }
  
 