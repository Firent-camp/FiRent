import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from '@prisma/client';
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import WishlistRoutes from "./routes/wishlistRoutes";
import chatRoutes from "./routes/chatRoutes"

const cors = require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// Initialize Prisma
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/trips", TripRoutes);
app.use("/wishlist", WishlistRoutes);
app.use('/chats', chatRoutes);

// Socket.IO logic
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", (room) => {
    console.log(room);
    socket.join(room);
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  });

  socket.on("send", (data) => {
    console.log(data);
    io.to(data.conversationId).emit("receive", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const main = () => {
  console.log("socket.io");
};

main();
