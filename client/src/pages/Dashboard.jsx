import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatroom from '../components/Chatroom'

const Dashboard = () => {
  return (
   <>
    <div className='flex flex-row h-screen'>
      <div className='w-full md:w-[30%] border border-green-950  bg-blue-100'>
      <Sidebar />
      </div>
      <div className='hidden md:block  md:w-[70%] border border-green-950 bg-blue-100'>
      <Chatroom />
      </div>
    </div>
    </>
  )
}

export default Dashboard
