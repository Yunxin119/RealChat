import express from 'express';
const router = express.Router();
import { protectMiddleware } from '../middlewares/authMiddleware.js';
import {login, logout, signup, getUsersFromSidebar } from '../controllers/UserControllers.js';

// MARK: Auth Routes
router.route('/auth/signup').post(signup);
router.route('/auth/login').post(login);
router.route('/auth/logout').post(logout)

// MARK: User Routes
router.route('/').get(protectMiddleware, getUsersFromSidebar)

export default router;