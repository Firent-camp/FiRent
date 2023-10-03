// import { Server, Socket } from 'socket.io';
// import { PrismaClient } from '@prisma/client';

// let io: Server;
// let prisma: PrismaClient;

// function initializeSocket(socketServer: Server, prismaClient: PrismaClient) {
//   io = socketServer;
//   prisma = prismaClient;

//   io.on('connection', (socket: Socket) => {
//     console.log('A user connected');

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });

//     socket.on('sendMessage', async (data) => {
//       try {
//         const { senderId, receiverId, message } = data;

//         const chatMessage = await prisma.chatMessage.create({
//           data: {
//             senderId,
//             receiverId,
//             message,
//           },
//         });

//         io.emit('messageReceived', chatMessage);
//       } catch (error) {
//         console.error('Failed to send message:', error);
//       }
//     });
//   });
// }

// export { initializeSocket };
