import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected = true
  return (
    <div className='md: min-w-[450px] flex flex-col'>
      {noChatSelected ? <NoChatSeletedPage /> : (
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
      )}

    </div>
  )
}

const NoChatSeletedPage = () => {
  return (
    <div className='flex items-center flex-col w-full h-full justify-center'>
      <div className='text-gray-100 text-center px-4 sm:text-lg md:text-xl lg:text-2xl font-semibold text-opacity-70'>
        <p className="animate-fade-in">Hey there, 
          <span className="text-blue-500"> John Doe</span>! 
          <span> 👋 </span>
        </p>
      <p className=" text-gray-400">Say hello to your next great chat! <span className="text-blue-300">✨</span></p>
      </div>
      <div className=' text-gray-100 text-opacity-70 mt-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm: size-15 md: size-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      </div>
    </div>
  )
}

export default MessageContainer
