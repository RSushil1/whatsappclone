import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatroom from '../components/Chatroom'
import Menubar from '../components/Menubar'

const Dashboard = () => {
  return (
   <>
    <div className='flex flex-row h-screen'>
      <div className='hidden md:block lg:w-[3%] border border-green-950 bg-blue-100 h-screen'>
        <Menubar />
      </div>
      <div className='w-full md:w-[27%] border border-green-950  bg-blue-100 h-screen'>
      <Sidebar />
      </div>
      <div className='hidden md:block  w-[70%] border border-green-950 bg-blue-100 h-screen'>
      <Chatroom />
      </div>
    </div>
    </>
  )
}

export default Dashboard
