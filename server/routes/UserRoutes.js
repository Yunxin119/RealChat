import express from 'express';
const router = express.Router();
import {login, logout, signup} from '../controllers/UserControllers.js';

// MARK: Auth Routes
router.route('/auth/signup').get(signup);

router.route('/auth/login').get(login);

router.route('/auth/logout').get(logout)

export default router;