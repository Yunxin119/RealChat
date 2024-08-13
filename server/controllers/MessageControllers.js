import Message from "../models/MessageModel";

// @desc: send a message
// @route: POST /api/messages/send/:id
// @access: Private
export const sendMessage = async (req, res) => {
    try {
        const {message } = req.body;
        const {id} = req.params.id;


    } catch (error) {
        console.error(error.message);
        res.status(400).json({message: error.message});
    }
}

// 