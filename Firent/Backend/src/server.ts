import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
// import WishlistRoutes from "./routes/wishlistRoutes";
import chatRoutes from "./routes/chatRoutes";
import threadRoutes from './routes/threadRoute';
import commentRoutes from './routes/commentRoute';
import Stripe from "stripe";
import { Socket } from "socket.io";
import { createPaymentIntent } from "./controllers/stripeController";
import { Message } from "./types/rentfire";

const app = express();
const server = http.createServer(app);
const io: Server = new Server(server);
const cors = require("cors");
const reactionRoutes = require('./routes/reactionRoutes');
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
app.post("/create-payment-intent", createPaymentIntent);
app.use('/threads', threadRoutes);
app.use('/threads/:threadId/comments', commentRoutes);

app.use(reactionRoutes);


// Socket.IO logic

io.on("connection", (socket: Socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinChat", async ({ userId, otherUserId }: { userId: string; otherUserId: string }) => {
    const chat = await prisma.chat.findFirst({
      where: {
        participants: {
          every: {
            OR: [
              { firebaseId: userId }, 
              { firebaseId: otherUserId }, 
            ],
          },
        },
      },
    });
    if (!chat) {
      const newChat = await prisma.chat.create({
        data: {
          participants: {
            connect: [
              { firebaseId: userId },
              { firebaseId: otherUserId }, 
            ],
          },
        },
      });
      socket.join(newChat.id.toString());
    } else {
      socket.join(chat.id.toString());
    }
  });

  socket.on("sendMessage", async ({ chatId, userId, text }: { chatId: number; userId: string; text: string }) => {
    try {
      const message = await prisma.message.create({
        data: {
          content:text,
          sender: {
            connect: {
              firebaseId: userId, 
            },
          },
          chat: {
            connect: {
              id: chatId,
            },
          },
        },
      });
      io.to(chatId.toString()).emit("message", message);
    } catch (error) {
      console.error(error);
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
