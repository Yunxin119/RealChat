import React from 'react'
import SingleConversation from './SingleConversation'
import useGetSidebar from '../../hooks/useGetSidebar'
import { useAuth } from '../../context/AuthContext'


const Conversations = () => {
  const { loading ,sidebar } = useGetSidebar()
  const { authUser } = useAuth()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      { sidebar.map((user) => (
        <SingleConversation key={user._id} user={user} />
        // <span>{user.nickname}</span>
      ))}

    </div>
  )

}

export default Conversations
