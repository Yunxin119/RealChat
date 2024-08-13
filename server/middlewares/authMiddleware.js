import jwt from 'jsonwebtoken';

export const protectMiddleware = async (req, res, next) => {
    let token; // declare token variable
    token = req.cookies.jwt; // get token from cookies

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token
            req.user = User.findById(decoded.id); // get user from decoded token
            next();
        } catch (error) {
            console.error(error.message);
            res.status(401).json({message: 'Not authorized, token failed'});
        }
    } else {
        res.status(401).json({message: 'Not authorized, check login status'});
    }
}