import React from 'react'
import { useState } from 'react'
import useConversation from '../../store/useConversation'
import useGetMessage from '../../hooks/useGetMessage'
import SingleMessage from './SingleMessage'
import Skeleton from '../Skeleton'

const Messages = () => {
  const {loading, messages} = useGetMessage()
  // console.log(messages)

  return (
		<div className='px-4 flex-1 overflow-auto'>
      {loading && <Skeleton />}
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-300 mt-3'>Send a message to start conversation!</p>
      )}
      {!loading && messages.map((message) => (
        <SingleMessage key={message._id} message={message} />
      ))}
      {/* <SingleMessage /> */}
		</div>
  )
}

export default Messages
