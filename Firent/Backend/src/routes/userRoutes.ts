import { Router } from 'express';
import { 
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController ,
  getUserByFirebaseIdController
} from '../controllers/userController';

const router = Router();

router.post('/add', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getUserController);
router.get('/firebase/:firebaseId', getUserByFirebaseIdController); // New route
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
