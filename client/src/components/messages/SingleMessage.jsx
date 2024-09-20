import React from 'react'
import { useAuth } from '../../context/AuthContext'
import useConversation from '../../store/useConversation'

const SingleMessage = ({message}) => {
  const { authUser } = useAuth()
  const { selectedConversation } = useConversation()

  const fromMe = message.senderId === authUser._id
  const sentTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
});
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic
  const chatType = fromMe ? 'chat-end' : 'chat-start'
  const shakeStatus = message.shouldShake ? 'shake' : ''

  return (
    <div className={`chat ${chatType}`}>
      {/* chat end means sending from my side, chat start means the opposite */}

        {/* Avatar */}
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Sender Avatar"
                src={profilePic}
              />
            </div>
        </div>
        {/* Message Content */}
        {fromMe ? (
          <div className="chat-bubble bg-indigo-500 bg-opacity-60 text-white">{message.message}</div>
        ): (
          <div className={`chat-bubble bg-gray-100 bg-opacit dy-60 text-gray-700 ${shakeStatus}`}>{message.message}</div>
        )}
        
        {/* Message Footer */}
        <div class="chat-footer mt-[3px] text-sm opacity-50 text-gray-500">{sentTime}</div>
    </div>
  )
}

export default SingleMessage
