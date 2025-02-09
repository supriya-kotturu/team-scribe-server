import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { REQUEST_ORIGIN, PORT } from "./const/env";

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: REQUEST_ORIGIN,
        methods: ["GET", "POST"]
    }
});


io.on("connection", (socket) => {
    // ...
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});