
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PrismaClient, Prisma } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
// import WishlistRoutes from "./routes/wishlistRoutes";
import chatRoutes from "./routes/chatRoutes";
import { createServer } from "http";

const cors = require("cors");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const prisma = new PrismaClient();

type MessageInput = {
  chatId: number;
  senderId: string;
  content: string;
};

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/trips", TripRoutes);
// app.use("/wishlist", WishlistRoutes);
app.use("/chats", chatRoutes);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", (room) => {
    console.log(room);
    socket.join(room);
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  });

  socket.on("send", async (data: MessageInput) => {
    try {
      const { chatId, content, senderId } = data;

      const newMessage = await prisma.message.create({
        data: {
          chat: { connect: { id: chatId } },
          content,
        },
      });

      io.to(chatId.toString()).emit("message", newMessage);
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

