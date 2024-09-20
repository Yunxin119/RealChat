import User from '../models/UserModel.js';
import bcrypyt from 'bcryptjs';
import generateTokenAndCookie from '../utils/generateToken.js';

// @desc: signup a new user
// @route: POST /api/users/auth/signup
// @access: Public
export const signup = async (req, res) => {
    const {nickname, username, password, comfirmPassword, gender} = req.body;
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
        nickname,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender == "male" ? maleProfilePic : femaleProfilePic,
    });

    if (user) {
        generateTokenAndCookie(user._id, res);
        user.save();
    }
    res.status(201).json({
        _id: user._id,
        nickname: user.nickname,
        username: user.username,
        profilePic: user.profilePic,
    });
}

// @desc: login a user
// @route: POST /api/users/auth/login
// @access: Public
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const passwordMatch = await bcrypyt.compare(password, user.password);
        if (user && passwordMatch) {
            generateTokenAndCookie(user._id, res);
            res.status(200).json({
                _id: user._id,
                nickname: user.nickname,
                username: user.username,
                profilePic: user.profilePic,
            });
        } else {
            res.status(400);
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// desc: logout a user
// @route: POST /api/users/auth/logout
// @access: Private
export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge:0});
        
        res.status(200).json({Message: 'Logged Out Successfully'})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// @desc: get users from sidebar
// @route: GET /api/users
// @access: Private
export const getUsersFromSidebar = async (req, res) => {
    try {
        const authUser = req.user._id;
        // Here we don't want to show the authenticated user in the sidebar so we need to exclude the authenticated user
        const users = await User.find({_id: {$ne: req.user._id}}).select("-password"); // {$ne: req.user._id} means not equal to the authenticated user
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message }); 
    }
}

