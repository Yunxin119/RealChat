// MARK: import modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import UserRoutes from './routes/userRoutes.js';
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/users', UserRoutes);

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});