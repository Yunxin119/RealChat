import React from 'react'

const SingleConversation = () => {
  return (
    <>
        <div className='flex gap-3 items-center hover:bg-sky-400 rounded-md p-2 py-2 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='text-lg font-semibold text-gray-300'>John Doe</p>
                    <span className='text-xl'>⛄</span>
                </div>
            </div>
        </div>

        <div className='devider my-0 py-0 h-1'/>
    </>
  )
}

export default SingleConversation
