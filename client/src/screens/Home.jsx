import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/messages/MessageContainer'

const Home = () => {
  return (
    <div>
       <div className='sm:h-[450px] md:h-[550px] lg:h-[750px] bg-gray-450 w-full p-6 rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        {/* <MessageContainer /> */}
       </div>
    </div>
  )
}

export default Home
