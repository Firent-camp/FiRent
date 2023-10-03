import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient } from '@prisma/client';
const cors = require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

const server = http.createServer(app);

const io = new Server(server);


import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import WishlistRoutes from "./routes/wishlistRoutes";
import chatRoutes from "./routes/chatRoutes";
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/trips", TripRoutes);
app.use("/wishlist", WishlistRoutes);
app.use('/chat', chatRoutes);

const prisma = new PrismaClient();


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
