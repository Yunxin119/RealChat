import express from 'express';
import { sendMessage, getMessages } from '../controllers/MessageControllers.js';
import { protectMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

// MARK: Message Routes
router.route('/send/:id').post(protectMiddleware, sendMessage)
router.route('/:id').get(protectMiddleware, getMessages);

export default router;