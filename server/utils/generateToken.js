import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true, // this is to prevent XSS attacks
        samesite: 'strict', // this is to prevent CSRF attacks
    })
}

export default generateTokenAndCookie;