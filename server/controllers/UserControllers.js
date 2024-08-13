// @desc: signup a new user
// @route: POST /api/users/auth/signup
// @access: Public
export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        username,
        email,
        password
    });
}

export const login = (req, res) => {
    res.send('login page');
}

export const logout = (req, res) => {
    res.send('logout page');
}

