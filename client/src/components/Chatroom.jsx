import React from 'react'
import { FiVideo } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';

const Chatroom = () => {
    return (
        <div>
            <div className='flex flex-row justify-between text-white font-semibold p-5 bg-green-600 z-10 h-[10vh]'>
                <div className='ms-5'>Chats</div>
                <div>
                    <button className='ms-5'><FiVideo /></button>
                    <button className='ms-5'><FiPhoneCall /></button>
                </div>
            </div>
            <div className='h-[80vh] z-10 p-5'>room</div>
            <div className='flex flex-row text-white font-semibold p-3 bg-green-600 z-10 h-[10vh]'>
                <div className='ms-5'><BsEmojiSmile /></div>
                <form className='ms-5 flex flex-row'>
                    <input type="text" className=" px-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button type='submit' className='ms-5'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chatroom
