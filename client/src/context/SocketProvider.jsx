import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { UseAuth } from './Auth'
const SocketContext = React.createContext()

export function useSocket(){
    return useContext(SocketContext)
}

const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState();
  const [auth] = UseAuth();
  const email = auth?.user?.email

    console.log(email)

    useEffect(()=>{
        const newSocket = io('http://localhost:8000',{query:{email}})
        setSocket(newSocket)
        return ()=>newSocket.close()
    },[email])
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
