import Cart from '../controllers/cartController'
import express from 'express';
const route=express.Router();

route.get('/',Cart.getAmounts)
route.get('/get/:id',Cart.getAmountByUser)
route.post('/add',Cart.AddAmount)
export default route;