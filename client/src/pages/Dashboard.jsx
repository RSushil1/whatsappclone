import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chatroom from '../components/Chatroom'

const Dashboard = () => {
  const [chatWith, setChatWith] = useState("");

  const handleChatWith = (data) => {
    setChatWith(data);
  };
  return (
   <>
    <div className='flex flex-row h-screen'>
      <div className='w-full md:w-[30%] border border-green-950  bg-blue-100'>
      <Sidebar handleChatWith={handleChatWith}/>
      </div>
      <div className='hidden md:block  md:w-[70%] border border-green-950 bg-blue-100'>
      <Chatroom chatWith={chatWith} />
      </div>
    </div>
    </>
  )
}

export default Dashboard
