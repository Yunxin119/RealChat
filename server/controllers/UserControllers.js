import User from '../models/UserModel.js';
import bcrypyt from 'bcryptjs';

// @desc: signup a new user
// @route: POST /api/users/auth/signup
// @access: Public
export const signup = async (req, res) => {
    const {username, password, comfirmPassword, gender} = req.body;
    // validate user input
    if (comfirmPassword !== password) {
        res.status(400);
        throw new Error('Passwords do not match');
    }
    // check if user already exists
    const userExists = await User.findOne({username});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }
    // avatar
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    // salt password
    const salt = await bcrypyt.genSalt(10);
    const hashedPassword = await bcrypyt.hash(password, salt);
    // create user
    const user = await User.create({
        username,
        password: hashedPassword,
        gender,
        profilePic: gender == "male" ? maleProfilePic : femaleProfilePic,
    });

    await user.save();
    // JWT token
    res.status(201).json({
        _id: user._id,
        username: user.username,
        profilePic: user.profilePic,
    });
}

export const login = async (req, res) => {
    res.send('login page');
}

export const logout = (req, res) => {
    res.send('logout page');
}

