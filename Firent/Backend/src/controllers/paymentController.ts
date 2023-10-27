import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        user: true,
        trip: true,
      },
    });
    res.json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createPayment = async (req: Request, res: Response) => {
  const { cardName, cardNumber, expiringDate, cvv,current, userId, tripId } = req.body;

  try {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    const payment = await prisma.payment.create({
      data: {
        cardName,
        cardNumber,
        expiringDate,
        cvv,
        current,
        userId,
        tripId,
      },
      include: {
        user: true,
        trip: true,
      },
    });

    res.json(payment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export { getPayments, createPayment };
