import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatroom from '../components/Chatroom'
import Menubar from '../components/Menubar'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-[3%] border border-green-950 shadow-lg bg-green-100'>
        <Menubar />
      </div>
      <div className='w-[27%] border border-green-950 shadow-2xl bg-green-100'>
      <Sidebar />
      </div>
      <div className='w-[70%] border border-green-950 h-screen shadow-inner bg-green-100'>
      <Chatroom />
      </div>
    </div>
  )
}

export default Dashboard
