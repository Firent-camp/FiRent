// import { Request, Response } from 'express';
// import { createWishlist, getWishlist, updateWishlist, deleteWishlist, getAllWishlists } from '../models/wishlistModel';

// export const createWishlistController = async (req: Request, res: Response) => {
//     try {
//         const newWishlist = await createWishlist(req.body);
//         res.json(newWishlist);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// export const getWishlistController = async (req: Request, res: Response) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const wishlist = await getWishlist(id);
//         res.json(wishlist);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// export const updateWishlistController = async (req: Request, res: Response) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const updatedWishlist = await updateWishlist(id, req.body);
//         res.json(updatedWishlist);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// export const deleteWishlistController = async (req: Request, res: Response) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         await deleteWishlist(id);
//         res.json({ message: 'Wishlist deleted successfully' });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };


// export const getAllWishlistsController = async (req: Request, res: Response) => {
//   try {
//     const wishlists = await getAllWishlists();
//     res.json(wishlists);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };