import express from 'express';
const router = express.Router();
import { getPayments, createPayment } from "../controllers/paymentController";

// Define routes
router.get('/', getPayments);
router.post('/payments', createPayment);

export default router;
