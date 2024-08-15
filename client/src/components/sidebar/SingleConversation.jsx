import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocket } from '../../context/SocketContext'

const SingleConversation = ({user, emoji}) => {
    // State management
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === user._id // check if the selected conversation is the same as the user id
    const { onlineUsers } = useSocket()
    const isOnline = onlineUsers.includes(user._id)
    const onlineStatus = isOnline? 'online' : 'offline'

  return (
    <>
        <div className={'flex gap-3 items-center hover:bg-sky-400 rounded-md p-2 py-2 cursor-pointer' + (isSelected ? ' bg-sky-400' : '')}
            onClick = {() => setSelectedConversation(user)}    
        >
            <div className={`avatar ${onlineStatus}`}>
                <div className='w-12 rounded-full'>
                    <img src={user.profilePic} alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='text-lg font-semibold text-gray-300'>{user.nickname}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>

        <div className='devider my-0 py-0 h-1'/>
    </>
  )
}

export default SingleConversation
