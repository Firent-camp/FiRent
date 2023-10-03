import { Router } from 'express';
import { 
  createWishlistController,
  getWishlistController,
  updateWishlistController,
  deleteWishlistController ,
getAllWishlistsController
} from '../controllers/wishlistController';

const router = Router();

router.post('/', createWishlistController);
router.get('/:id', getWishlistController);
router.get('/', getAllWishlistsController);
router.put('/:id', updateWishlistController);
router.delete('/:id', deleteWishlistController);

export default router;