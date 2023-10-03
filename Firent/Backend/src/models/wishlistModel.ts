import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define a WishlistCreateInput type (modify fields accordingly)
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

export const getWishlist = async (id: number) => {
  try {
    return await prisma.wishlist.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

// Define a WishlistUpdateInput type (modify fields accordingly)
type WishlistUpdateInput = {
  userId?: string;
  tripId?: number;
};

export const updateWishlist = async (
  id: number,
  wishlistData: WishlistUpdateInput
) => {
  try {
    return await prisma.wishlist.update({
      where: {
        id: id,
      },
      data: wishlistData,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteWishlist = async (id: number) => {
  try {
    return await prisma.wishlist.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};


export const getAllWishlists = async () => {
  return await prisma.wishlist.findMany({
    include: {
      trip: true, 
      user: true, 
    },
  });
};