import React, {useEffect} from 'react'
import { useSocket } from '../context/SocketContext';
import useConversation from '../store/useConversation';
import notification from '../assets/notification.mp3';

const useMessageListener = () => {
    const { socket } = useSocket();
    const { messages, setMessages } = useConversation();
    const { selectedConversation } = useConversation();

    useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
            if (newMessage.senderId === selectedConversation._id) {
                newMessage.shouldShake = true;
                const audio = new Audio(notification);
                audio.play();
                setMessages([...messages, newMessage]);
            }
		});

		return () => socket?.off("newMessage");
    },[
        socket, messages, setMessages
    ])
}

export default useMessageListener
