import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { REQUEST_ORIGIN, PORT } from "./utils/env";
import { SocketEvents } from "./utils/socket-io";

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: REQUEST_ORIGIN,
        methods: ["GET", "POST"]
    }
});

io.on(SocketEvents.connect, (socket) => {
    socket.on(SocketEvents.joinNote, ({ invite_id, note_id }) => {
        const room = `${invite_id}-${note_id}`;
        socket.join(room);
        console.log(`Joined room: ${room}`);
    })

    socket.on(SocketEvents.contentChanged, ({ invite_id, note_id, content }) => {
        const room = `${invite_id}-${note_id}`;
        socket.to(room).emit(SocketEvents.receiveChange, content);
    })

    socket.on(SocketEvents.disconnect, () => {
        console.log('Client disconnected');
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
