import React, { useState, useEffect } from 'react';
import { FiVideo } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

const Chatroom = () => {
    const [messageByMe, setMessageByMe] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            setMessageByMe(e.target.value)
            console.log(messageByMe)
            const newMessage = {
                content: messageByMe,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            setMessages([...messages, newMessage]); // Use functional update to ensure correct state update
          
            setMessageByMe('');

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // Scroll to the bottom of the chat div when messages are updated
        const chatDiv = document.getElementById('chatDiv');
        chatDiv?.scrollTo(0, chatDiv.scrollHeight);
    }, []);

    return (
        <div className=' h-screen'>
            <div className='flex flex-row justify-between text-white font-semibold p-5 bg-blue-900 z-10 h-[10vh]'>
                <div className='ms-3'>
                    <div className="flex mt-0">
                        <img className="h-8 w-8 rounded-full" src="img\user.png" alt="user" />
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-white"></p>
                        </div>
                    </div>

                </div>
                <div>
                    <button className='ms-5'><FiVideo /></button>
                    <button className='ms-5'><FiPhoneCall /></button>
                </div>
            </div>
            <div className='h-[80vh] z-10 p-5 overflow-y-scroll'>
                {localStorage.getItem("message") ? (
                    JSON.parse(localStorage.getItem("message")).map((message, index) => (
                        <div key={index} className='max-w-[20%]' id='chatDiv'>
                            <div className='bg-red-200 p-1 rounded-lg shadow-md m-5'>{message.content}</div>
                            <p>{message.timestamp}</p>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}

            </div>
            <div className='flex flex-row text-white font-semibold p-3 bg-blue-900 z-10 h-[10vh]'>
                <div className='ms-5 w-[5%] p-2'><BsEmojiSmile className='h-5 w-5' /></div>
                <form className='ms-5 flex flex-row w-[95%]' onSubmit={handleSend}>
                    <input name="messageByMe"
                        value={messageByMe}
                        onChange={(e) => setMessageByMe(e.target.value)}
                        type="text" className=" w-[90%] px-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button type='submit' className='w-[10%] ms-5 p-1 flex flex-row rounded-md bg-blue-500'>Send<AiOutlineSend className='ms-1 h-full' /></button>
                </form>
            </div>
        </div>
    )
}

export default Chatroom
