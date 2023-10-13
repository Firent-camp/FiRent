const { PrismaClient } = require("@prisma/client");
import { User } from "../types/rentfire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {FIREBASE_AUTH} from "../../../Firent/FireBase/index"
const prisma = new PrismaClient();





// export const createUser = async (userData: User, password: string) => {
//   try {
//     // 1. Create the user in Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, userData.email, password);
//     const firebaseUser = userCredential.user;

//     // 2. Use the Firebase UID as the identifier in your Prisma database
//     const prismaUser = await prisma.user.create({
//       data: {
//         ...userData,
//         firebaseId: firebaseUser.uid,
//       },
//     });

//     return prismaUser;
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error;
//   }
// };

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


