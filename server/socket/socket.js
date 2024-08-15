import { Server } from "socket.io";
import http from "http";
import express from "express";

// MARK: Express Server
// We move the express server to socket file so we can use it in the socket.io server
// We will call it in server.js to use it in the normal server and routes
const app = express();

const server = http.createServer(app); // create a server with express app
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
    }
); // create a socket.io server

const userSocketMap = {} // {userId: socketId}

// io.on is an event listener that listens for a connection event
// When a connection event is detected, it will run the callback function
// socket.on() is an event listener that listens for a disconnect event and can be used on client and server side
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // io.emit() sends an event to all connected clients
    io.emit("onlineUsers", Object.keys(userSocketMap)); // send the online users to all clients
    
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId]; // remove the user from the online users list
        io.emit("onlineUsers", Object.keys(userSocketMap)); // refresh the online users list
    });
});
export { app, io, server };

