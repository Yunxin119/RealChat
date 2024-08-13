import express from 'express';
import { sendMessage } from '../controllers/MessageControllers.js';
import { protectMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

// MARK: Message Routes
router.route('/send/:id').post(protectMiddleware, sendMessage);

export default router;