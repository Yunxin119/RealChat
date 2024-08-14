import React from 'react'

const SingleMessage = () => {
  return (
    <div className='chat chat-end'>
      {/* chat end means sending from my side, chat start means the opposite */}

        {/* Avatar */}
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        {/* Message Content */}
        {/* TODO:  */}
        {/* I would like to dynamically set the incoming message (chat-start) to bg-gray-100 and text-gray-700 */}
        {/* And set the chat-end message to bg-indigo-500 and text-white */}
        <div className="chat-bubble bg-indigo-500 bg-opacity-60 text-white">It was said that you would, destroy the Sith, not join them.</div>
        {/* Message Footer */}
        <div class="chat-footer mt-[3px] text-sm opacity-50 text-gray-500">16:56</div>
    </div>
  )
}

export default SingleMessage
