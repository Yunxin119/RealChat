import Message from "../models/MessageModel.js";
import Conversation from "../models/ConversationModel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

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

        // save conversation and message to database
        await conversation.save();
        await newMessage.save();

        // TODO: Socket.io implementation
        const recieverSocketId = getReceiverSocketId(receiver);
        // if reciever is online, send the message to the reciever
        if (recieverSocketId) {
            // io.to() sends an event to a specific client rather than io.emit send to all online users
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);


    } catch (error) {
        console.error(error.message);
        res.status(400).json({message: error.message});
    }
}

export const getMessages = async (req, res) => {
    try {
        const receiver = req.params.id;
        const sender = req.user._id; // get sender from authenticated user

        // populate here is a method that allows you to reference documents in other collections
        // populate("messages") will populate messages in conversation
        let conversation = await Conversation.findOne({members: {$all: [sender, receiver]}}).populate("messages"); // populate messages in conversation


        // if conversation does not exist, return empty array
        if (!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({message: error.message});
    }
}
