import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import useConversation from '../store/useConversation'
import { toast } from 'react-toastify';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuth();

    const sendMessage = async (message) => {
        if (!message) return;

        setLoading(true);
        try {
            const res = await fetch(`api/messages/send/${selectedConversation.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message})
            })
            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
                throw new Error(data.error);
            }
            setMessages([...messages, data.message]);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
  return { loading, sendMessage }
}

export default useSendMessage
