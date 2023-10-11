import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import WishlistRoutes from "./routes/wishlistRoutes";
import chatRoutes from "./routes/chatRoutes";
import threadRoutes from './routes/threadRoute';
import commentRoutes from './routes/commentRoute';

import Stripe from "stripe";
import { createPaymentIntent } from "./controllers/stripeController";
import { Message } from "./types/rentfire";

const cors = require("cors");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Initialize Prisma
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

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
app.use("/wishlist", WishlistRoutes);
app.use("/chats", chatRoutes);
app.post("/create-payment-intent", createPaymentIntent);
app.use('/threads', threadRoutes);
app.use('/threads/:threadId/comments', commentRoutes);



// Socket.IO logic
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", (room) => {
    console.log(room);
    socket.join(room);
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  });
  socket.on("send", (data) => {
    // Change event name to 'send'
    console.log(data);
    // Save the message to the database here
    // Example: You can use Prisma to save messages to your database
    prisma.message
      .create({
        data: {
          chat: data.chatRoomId,
          sender: data.senderId,
          content: data.content,
        },
      })
      .then((message) => {
        io.to(data.chatRoomId).emit("message", message); // Emit the message back to the chat room
      })
      .catch((err) => {
        console.error(err);
      });
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
io.listen(4001);
const main = () => {
  console.log("socket.io");
};

main();
