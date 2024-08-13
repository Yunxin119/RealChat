import express from 'express';
import { sendMessage } from '../controllers/MessageControllers';
import { protectMiddleware } from '../middlewares/authMiddleware';
const router = express.Router();

// MARK: Message Routes
router.route('/send/:id').post(protectMiddleware, sendMessage);
export default router;