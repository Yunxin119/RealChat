import React from 'react'
import SingleMessage from './SingleMessage'

const Messages = () => {
  return (
    <div className='p-4 flex-1 overflow-auto'>
      <SingleMessage />
      <SingleMessage />
    </div>
  )
}

export default Messages
