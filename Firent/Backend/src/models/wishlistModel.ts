import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type WishlistCreateInput = {
  userId: string;
  tripId: number;
};

export const createWishlist = async (wishlistData: WishlistCreateInput) => {
  try {
    return await prisma.wishlist.create({
      data: wishlistData,
    });
  } catch (error) {
    throw error;
  }
};

export const getWishlist = async (userId: string) => {
  try {
    return await prisma.wishlist.findMany({
      where: {
        userId: userId,
      },
      include: {
        trip: {
          include: {
            images: {
              where: {
                entityType: 'CAMPGROUND', // Adjust this to match your entity type
              },
            },
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};



type WishlistUpdateInput = {
  userId?: string;
  tripId?: number;
};

export const updateWishlist = async (userId: string, tripId: number, wishlistData: WishlistUpdateInput) => {
  try {
    return await prisma.wishlist.update({
      where: {
        userId_tripId: {
          userId: userId,
          tripId: tripId,
        },
      },
      data: wishlistData,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteWishlist = async (userId: string, tripId: number) => {
  try {
    return await prisma.wishlist.delete({
      where: {
        userId_tripId: {
          userId: userId,
          tripId: tripId,
        },
      },
    });
  } catch (error) {
    throw error;
  }
};


export const getAllWishlists = async () => {
  return await prisma.wishlist.findMany({
    include: {
      user: true,
      trip: true,
    },
  });
};
