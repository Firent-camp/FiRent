import express from "express";
import http from "http";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/userRoutes";
import TripRoutes from "./routes/tripRoutes";
import chatRoutes from "./routes/chatRoutes";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io: Server = new Server(server);
const cors = require("cors");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/trips", TripRoutes);
app.use("/chats", chatRoutes);

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
