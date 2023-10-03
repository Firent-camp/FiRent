import { Router } from 'express';
import { 
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController 
} from '../controllers/userController';

const router = Router();

router.post('/add', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
