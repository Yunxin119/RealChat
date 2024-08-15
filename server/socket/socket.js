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

// io.on is an event listener that listens for a connection event
// When a connection event is detected, it will run the callback function
// socket.on() is an event listener that listens for a disconnect event and can be used on client and server side
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
export { app, io, server };