// MARK: import modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

// MARK: import routes
import UserRoutes from './routes/userRoutes.js';
import MessageRoutes from './routes/MessageRoutes.js';

// MARK: import database connection
import connectDB from './db/db.js';

// MARK: create express app
const app = express();
const PORT = process.env.PORT || 5000;

// MARK: middleware
app.use(express.json()); // parse json data (req.body)
app.use(cookieParser()); // parse cookies
app.use('/api/users', UserRoutes);
app.use('api/messages', MessageRoutes);


app.listen(5000, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});