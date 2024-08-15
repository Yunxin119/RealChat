import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuth();

    useEffect(() => {
        if(authUser) {
            const socket = io('http://localhost:5000', {
                query: {
                    userId: authUser._id
                }
            }); // make the socket connection
            setSocket(socket); // set the socket to the state

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users); // get the online users from the server and set it to the state
            })

            return () => socket.close(); // close the connection when the user logs out
        } else {
            if (socket) {
                socket.close(); // close the connection when the user logs out or there is no user
                setSocket(null); // set the socket to null
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}