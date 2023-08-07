import { UseAuth } from "../context/Auth"
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { NavLink } from "react-router-dom"
import AddContactModal from './AddContactModal';
import ProfileButton from './ProfileButton';
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ handleChatWith, viewProfile }) {
    const [auth] = UseAuth();
    const [contacts, setContacts] = useState([]);
    const [calls, setCalls] = useState([]);
    const [chats, setChats] = useState([]);
    // const [chatWith, setChatWith] = useState("");

    const getContacts = async () => {
        const res = await axios.get("http://localhost:8000/api/auth/contacts");
        setContacts(res.data)

    }
    useEffect(() => {
        getContacts();
    }, [auth])

    


    const openChatWith = (person) => {
        const dataToSend = person;
        handleChatWith(dataToSend); // Call the function passed as prop with the data
    };
    const openProfile = (data) => {
        viewProfile(data);
    };

    return (
        <div className=" h-screen">
            <div className="w-full h-[90vh] max-w-md px-2 py-1 sm:px-0 overflow-y-auto">
                <Tab.Group>
                    <Tab.List className=" flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab
                            key={1}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Chat
                        </Tab>
                        <Tab
                            key={2}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Contacts
                        </Tab>
                        <Tab
                            key={3}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Calls
                        </Tab>

                    </Tab.List>
                    <Tab.Panels className="mt-2">
                            <Tab.Panel
                                key={11}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <ul>
                                    {chats.map((chat) => (
                                        <li
                                            key={chat._id}
                                            className="relative rounded-md p-3 hover:bg-gray-300"
                                        >
                                            <div className=" flex flex-row">
                                                <div className="w-12 h-12">
                                                    <img className=" rounded-full" src={chat.photo} alt="person" />
                                                </div>
                                                <div className="ms-2">
                                                    <h3 className="text-sm font-medium leading-5">
                                                        {chat.name}
                                                    </h3>

                                                    <ul className="mt-1 flex text-xs font-normal leading-4 text-gray-500 justify-between">
                                                        <li>{chat.email}</li>
                                                        <li className=" justify-between ms-3">last seen </li>
                                                    </ul>
                                                </div>

                                                <NavLink
                                                    onClick={() => openChatWith(chat)}
                                                    className={classNames(
                                                        'absolute inset-0 rounded-md',
                                                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                    )}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className='flex flex-row justify-between text-white font-semibold p-1 bg-blue-900 z-10 h-[10vh]'>
                <ProfileButton name={auth?.user?.name} id={auth?.user?.email} photo={auth?.user?.photo} openProfile={openProfile} />
                <div>
                    <AddContactModal />
                </div>
            </div>
        </div>
    )
}


