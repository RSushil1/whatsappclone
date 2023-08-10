import React, {useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chatroom from '../components/Chatroom'
import Profile from '../components/Profile';
import SocketProvider from '../context/SocketProvider';

const Dashboard = () => {
  const [chatWith, setChatWith] = useState("");
  const [profile, setProfile] = useState(false);
  const [openProfile, setOpenProfile] = useState("");

  const handleChatWith = (data) => {
    setChatWith(data);
    setProfile(false)
  };
  const viewProfile = (data) => {
    setOpenProfile(data);
  };

  return (
   <>
   <SocketProvider>
    <div className='flex flex-row h-screen'>
      <div className='w-full md:w-[30%] border border-green-950  bg-blue-100'>
      <Sidebar handleChatWith={handleChatWith} viewProfile={viewProfile}/>
      </div>
      <div className='hidden md:block  md:w-[70%] border border-green-950 bg-blue-100'>
        {profile?(
            <Profile openProfile={openProfile}/>
          ):(  
            <Chatroom chatWith={chatWith} />
           )
        }
      </div>
    </div>
    </SocketProvider>
    </>
  )
}

export default Dashboard
