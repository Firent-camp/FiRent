import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import chatRoutes from "./routes/chatRoutes";
import threadRoutes from "./routes/threadRoute";
import commentRoutes from "./routes/commentRoute";
import Stripe from "stripe";
import { createPaymentIntent } from "./controllers/stripeController";

const app = express();
const server = http.createServer(app);
const io: Server = new Server(server);
const cors = require("cors");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

// Add Stripe Route to Handle Payments
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // in the smallest currency unit, e.g., cents for USD
      currency: "usd",
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: "Payment Intent creation failed" });
  } 
});
 
// Routes
app.use("/users", userRoutes);
app.use("/trips", TripRoutes);
app.use("/chats", chatRoutes);
app.use('/threads', threadRoutes);
// app.use('/threads/:threadId/comments', commentRoutes);
// app.use('/threads/:threadId/comments', commentRoutes);
// app.use('/threads', commentRoutes); 

// Socket.IO logic

// Create an interface for the data sent when a user joins a chat
// ... Previous code ...

// Create an interface for the data sent when a user joins a chat
interface JoinChatData {
  userId: string;
  otherUserId: string;
}

// Create an interface for the data sent when a user sends a message
interface SendMessageData {
  chatId: string;
  userId: string;
  text: string;
}

// Socket.IO logic
io.on('connection', (socket) => {
  socket.on('joinChat', async (data: JoinChatData) => {
    const chat = await prisma.chat.findFirst({
      where: {
        AND: [
          { participants: { some: { firebaseId: data.userId } } },
          { participants: { some: { firebaseId: data.otherUserId } } },
        ],
      },
    });

    if (!chat) {
      const newChat = await prisma.chat.create({
        data: {
          participants: { connect: [{ firebaseId: data.userId }, { firebaseId: data.otherUserId }] },
        },
      });
      socket.join(newChat.id.toString());
    } else {
      socket.join(chat.id.toString());
    }
  });

  socket.on('sendMessage', async (data: SendMessageData) => {
    try {
      const message = await prisma.message.create({
        data: {
          content: data.text,
          sender: {
            connect: {
              firebaseId: data.userId,
            },
          },
          chat: {
            connect: {
              id: Number(data.chatId),
            },
          },
        },
      });
  
      io.to(data.chatId).emit('message', message);
    } catch (error) {
      console.error(error);
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
