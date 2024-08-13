import Message from "../models/MessageModel.js";
import Conversation from "../models/ConversationModel.js";

// @desc: send a message
// @route: POST /api/messages/send/:id
// @access: Private
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiver = req.params.id;
        const sender = req.user._id; // get sender from authenticated user

        let conversation = await Conversation.findOne({members: {$all: [sender, receiver]}}); // find conversation between sender and receiver
        // if conversation does not exist, create a new conversation
        if (!conversation) {
            conversation = await Conversation.create({
                members: [sender, receiver],
            });
        }
        // create a new message
        const newMessage = await Message.create({
            senderId: sender,
            receiverId: receiver,
            message
        })
        // update conversation with new message
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // TODO: Socket.io implementation

        // save conversation and message to database
        await conversation.save();
        await newMessage.save();

        res.status(201).json({message: "Message sent successfully"});


    } catch (error) {
        console.error(error.message);
        res.status(400).json({message: error.message});
    }
}

export const getMessages = async (req, res) => {
    try {
        const receiver = req.params.id;
        const sender = req.user._id; // get sender from authenticated user

        let conversation = await Conversation.findOne({members: {$all: [sender, receiver]}}).populate("messages"); // populate messages in conversation
        // populate here is a method that allows you to reference documents in other collections
        // populate("messages") will populate messages in conversation

        // if conversation does not exist, return error
        if (!conversation) {
            return res.status(404).json({message: "No messages found"});
        }
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({message: error.message});
    }
}
