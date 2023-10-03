import { Request, Response } from 'express';
import { createTrip, getTrip, updateTrip, deleteTrip, getAllTrips } from '../models/tripModel';



export const createTripController = async (req: Request, res: Response) => {
  try {
    const { tripData, imageUrls } = req.body;

    if (!tripData || !imageUrls || !Array.isArray(imageUrls)) {
      return res.status(400).json({ error: 'Invalid request body.' });
    }

    const newTrip = await createTrip(tripData, imageUrls);

    res.status(201).json(newTrip);
  } catch (error) {
    console.error('Error creating trip with images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllTripsController = async (req: Request, res: Response) => {
  try {
    const allTrips = await getAllTrips(); 
    res.json(allTrips);
  } catch (error) {
    console.error('Error getting all trips:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


  export const getTripController = async (req: Request, res: Response) => {
    try {
      const trip = await getTrip(req.params.id);
      res.json(trip); 
    } catch (error) {
      res.status(500).send(error.message);
    }
  };




  export const updateTripController = async (req: Request, res: Response) => {
    try {
      const { tripData, imageData } = req.body;
  
      if (!tripData || !Array.isArray(imageData)) {
        return res.status(400).json({ error: 'Invalid request body.' });
      }
  
      const updatedTrip = await updateTrip(req.params.id, tripData, imageData);
      res.json(updatedTrip);
    } catch (error) {
      if (error.message === 'Trip not found') {
        return res.status(404).json({ error: 'Trip not found' });
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  


  

  export const deleteTripController = async (req: Request, res: Response) => {
    try {
      await deleteTrip(req.params.id);
      res.json({ message: 'Trip deleted successfully' });
    } catch (error) {
      console.error('Error deleting trip:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  