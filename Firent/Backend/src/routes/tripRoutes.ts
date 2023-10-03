import express from 'express';
import {
  getAllTripsController,
  getTripController,
  createTripController,
  updateTripController,
  deleteTripController,
} from '../controllers/tripController';

const router = express.Router();

router.get('/', getAllTripsController); 
router.get('/:id', getTripController); 
router.post('/', createTripController);
router.put('/:id', updateTripController); 
router.delete('/:id', deleteTripController); 

export default router;
