import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import chatRoutes from "./routes/chatRoutes";
import threadRoutes from "./routes/threadRoute";
import commentRoutes from "./routes/commentRoute";
import reactionRoutes from "./routes/reactionRoutes";
import cartRoutes from "./routes/cartRoutes"

const app = express();
const stripSecretKey="sk_test_51O42kIFw8lvOmf8jF3upAEf6BZ2G8z89i3q9h5vPuMD5iNF4dnFHIRRUrOlz9jlg7jwi1JU4F4OLLIWgYpYK3HZf00uN2aR8u5";
const stripePublicKey="pk_test_51O42kIFw8lvOmf8jnERB3KVjMcxlXxqH7VlSmiomhjl3U1Vv2qObZPWRGyPYdGAiAxG7BFgwUbzkLRZxOI6bD8tT0035Ef8kVR";
const stripe = require('stripe')(stripSecretKey);
const server = http.createServer(app);
const cors = require('cors');

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Initialize Stripe with your secret key


// Add Stripe Route to Handle Payments
// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount, // in the smallest currency unit, e.g., cents for USD
//       currency: "usd",
//     });
//     res.send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).send({ error: "Payment Intent creation failed" });
//   } 
// });
 
// Routes
app.use('/users', userRoutes);
app.use('/trips', TripRoutes);
app.use('/chats', chatRoutes);
app.use('/threads', threadRoutes);
app.use('/threads/:threadId/comments', commentRoutes);
app.use('/threads/:threadId/reactions', reactionRoutes);
app.use('/cart',cartRoutes)


// Socket.IO logic

// Create an interface for the data sent when a user joins a chat
// ... Previous code ...
app.post('/payment-sheet', async (req, res) => {//
  
  try{
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2023-10-16'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'eur',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey:stripePublicKey
    });
    console.log(customer.id)
  }
  catch(err){
    res.status(404)
    console.log(err)
  
  }
    
  });
// Create an interface for the data sent when a user joins a chat
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
