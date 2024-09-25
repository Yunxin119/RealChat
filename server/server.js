// MARK: import modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import {app, server} from './socket/socket.js';
import path from 'path';
// MARK: import routes
import UserRoutes from './routes/UserRoutes.js';
import MessageRoutes from './routes/MessageRoutes.js';

// MARK: import database connection
import connectDB from './db/db.js';

// MARK: create express app (moved to socket.js)
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// MARK: middleware
app.use(express.json()); // parse json data (req.body)
app.use(cookieParser()); // parse cookies
app.use('/api/users', UserRoutes);
app.use('/api/messages', MessageRoutes);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

server.listen(5000, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});