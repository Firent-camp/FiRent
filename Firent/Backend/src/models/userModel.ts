const { PrismaClient } = require("@prisma/client");
import { User } from "../types/rentfire";
const prisma = new PrismaClient();

export const getUser = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      firebaseId: id,
    },
    include: {
      images: true, 
    },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const updateUser = async (id: string, userData: Partial<User>) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        firebaseId: id,
      },
      data: userData,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: {
      firebaseId: id,
    },
  });
};

export const getUserByFirebaseId = async (firebaseId: string) => {
  return await prisma.user.findUnique({
    where: {
      firebaseId: firebaseId,
    },
  });
};