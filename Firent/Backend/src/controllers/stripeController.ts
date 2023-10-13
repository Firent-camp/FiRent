// stripeController.ts
import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-08-16" });

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { amount } = req.body; // Amount should be sent from the client based on the user's cart/selected items
        const paymentIntent = await stripe.paymentIntents.create({
            amount,  // in the smallest currency unit, e.g., cents for USD
            currency: "usd",
        });
        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: "Payment Intent creation failed" });
    }
};
