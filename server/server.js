// MARK: import modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// MARK: import routes
import UserRoutes from './routes/userRoutes.js';

// MARK: import database connection
import connectDB from './db/db.js';

// MARK: create express app
const app = express();
const PORT = process.env.PORT || 5000;

// MARK: middleware
app.use(express.json()); // parse json data (req.body)
app.use('/api/users', UserRoutes);


app.listen(5000, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});