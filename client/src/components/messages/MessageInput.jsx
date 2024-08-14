import React from 'react'

const MessageInput = () => {
  return (
    <div className='px-4 my-3'>
        <div className='w-full'>
            <input type='text' placeholder='What you wanna say?' 
            className='bg-opacity-60 bg-gray-400 border text-sm rounded-lg block p-2.5 w-full border-gray-500'
            />
            <button type='submit' className='btn btn-circle absolute pe-3 inset-y-0 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </div>
      
    </div>
  )
}

export default MessageInput
