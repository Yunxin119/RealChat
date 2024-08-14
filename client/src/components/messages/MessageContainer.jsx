import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='md: min-w-[450px] flex flex-col'>
      <>
        {/* Header */}
        <div className=' flex bg-slate-50 bg-opacity-50 px-4 py-2 mb-2 justify-between'>
          <span className='label-text ml-1'>To:</span> {" "}  
          {/* the {" "} is used to add a space between the span and the next element */}
          <span className='text-gray-700 font-semibold mr-1'>John Doe</span>
        </div>

        {/* Messages */}
        <Messages />

        {/* Message Input */}
        <MessageInput />
        
      </>
    </div>
  )
}

export default MessageContainer
