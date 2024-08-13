import express from 'express';
const router = express.Router();
import {login, logout, signup} from '../controllers/UserControllers.js';

// MARK: Auth Routes
router.route('/auth/signup').post(signup);

router.route('/auth/login').post(login);

router.route('/auth/logout').post(logout)

export default router;