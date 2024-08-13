import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    },
}, 
// createdAt and updatedAt fields => Member since and Last seen
{timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;
