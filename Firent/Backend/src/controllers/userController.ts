const { PrismaClient } = require("@prisma/client");
import { Request, Response } from 'express';
import {  getUser, updateUser, deleteUser,getAllUsers,getUserByFirebaseId} from '../models/userModel';
const prisma = new PrismaClient();


export const createUserController = async (req: Request, res: Response) => {

    try {
    const response = await prisma.user.create({
      data:{
        firebaseId : req.body.firebaseId,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email:req.body.email,
        address:req.body.address,
        image:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
      }
    }) 
    console.log(req.body);
       
    return res.status(200).json(response)
  }  
  catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const getUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






export const updateUserController = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getUserByFirebaseIdController = async (req: Request, res: Response) => {
  const { firebaseId } = req.params;
  try {
    const user = await getUserByFirebaseId(firebaseId);
    if (user) {
      const userData = {
        userName: user.userName,
        lastName :user.lastName,
        email: user.email,
        role: user.role,
        address: user.address,
      };
      res.status(200).json(userData);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





