import { Request, Response } from 'express';
import { createWishlist, getWishlist, updateWishlist, deleteWishlist, getAllWishlists } from '../models/wishlistModel';

export const createWishlistController = async (req: Request, res: Response) => {
    try {
        const newWishlist = await createWishlist(req.body);
        res.json(newWishlist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export const getWishlistController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // Use getWishlistWithTrip to get the wishlist along with trip data
    const wishlistWithTrip = await getWishlist(userId);
    res.json(wishlistWithTrip);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
  
  export const updateWishlistController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const tripId = parseInt(req.params.tripId, 10); // Make sure tripId is a valid integer
      const updatedWishlist = await updateWishlist(userId, tripId, req.body);
      res.json(updatedWishlist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export const deleteWishlistController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const tripId = parseInt(req.params.tripId, 10); // Make sure tripId is a valid integer
      await deleteWishlist(userId, tripId);
      res.json({ message: 'Wishlist deleted successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
}

export const getAllWishlistsController = async (req: Request, res: Response) => {
    try {
        const wishlists = await getAllWishlists();
        res.json(wishlists);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
