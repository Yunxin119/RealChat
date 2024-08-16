import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import useConversation from '../../store/useConversation'
import useGetMessage from '../../hooks/useGetMessage'
import SingleMessage from './SingleMessage'
import Skeleton from '../Skeleton'
import { set } from 'mongoose'
import useMessageListener from '../../hooks/useMessageListener'

const Messages = () => {
  const {loading, messages} = useGetMessage()
  useMessageListener()
  // useRef to get the last message
  const lastMessageRef = useRef()


  // Make the message page scroll to the bottom when the page is loaded
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' }, 100)
    })
  }, [messages])

  return (
		<div className='px-4 flex-1 overflow-auto'>
      {loading && <Skeleton />}
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-300 mt-3'>Send a message to start conversation!</p>
      )}
      {!loading && messages.map((message) => (
        <div  key={message._id} ref={lastMessageRef}>
        <SingleMessage message={message} />
        </div>
      ))}
      {/* <SingleMessage /> */}
		</div>
  )
}

export default Messages
