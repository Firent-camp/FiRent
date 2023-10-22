import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import TripRoutes from './routes/tripRoutes';
import chatRoutes from './routes/chatRoutes';
import threadRoutes from './routes/threadRoute';
import commentRoutes from './routes/commentRoute';
import Stripe from 'stripe';
import { createPaymentIntent } from './controllers/stripeController';


const app = express();
const server = http.createServer(app);
const cors = require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: 'Payment Intent creation failed' });
  }
});

// Routes
app.use('/users', userRoutes);
app.use('/trips', TripRoutes);
app.use('/chats', chatRoutes);
app.use('/threads', threadRoutes);
app.use('/threads/:threadId/comments', commentRoutes);
// app.use('/threads/:threadId/reactions', reactionRoutes);


// Socket.IO logic
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('joinChat', async ({ userId, otherUserId }: { userId: string; otherUserId: string }) => {
    // Define the participants array with the two user IDs.
    const participants = [userId, otherUserId];
  
    // Attempt to find an existing chat room with these participants.
    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            firebaseId: {
              in: participants,
            },
          },
        },
      },
    });
  
    if (!chat) {
      // If no chat room exists, create a new one.
      const newChat = await prisma.chat.create({
        data: {
          participants: {
            connect: participants.map((id) => ({ firebaseId: id })),
          },
        },
      });
  
      socket.join(newChat.id.toString());
    } else {
      // If a chat room with the same participants exists, join it.
      socket.join(chat.id.toString());
    }
  });
  

  socket.on('sendMessage', async (message) => {
    console.log('Received message:', message);
  
    try {
      const createdMessage = await prisma.message.create({
        data: {
          content: message.text,
          senderId: message.senderId,
          chatId: message.chatId,
        },
      });
  
      io.to(message.chatId.toString()).emit('message', createdMessage);
    } catch (error) {
      console.error('Error creating message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
