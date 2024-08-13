import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export const protectMiddleware = async (req, res, next) => {
    let token; // declare token variable
    token = req.cookies.jwt; // get token from cookies

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token
            const user = await User.findById(decoded.id).select('-password'); // get user data from database, excluding password to be safe
            if (!user) {
                res.status(404).json({message: 'User not found'});
            }
            req.user = user; // set user data to req.user
            next();
        } catch (error) {
            console.error(error.message);
            res.status(401).json({message: 'Not authorized, token failed'});
        }
    } else {
        res.status(401).json({message: 'Not authorized, check login status'});
    }
}