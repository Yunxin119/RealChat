import express from 'express';
import { sendMessage } from '../controllers/MessageControllers';
const router = express.Router();

// MARK: Message Routes
router.route('/send/:id').post(sendMessage);
export default router;