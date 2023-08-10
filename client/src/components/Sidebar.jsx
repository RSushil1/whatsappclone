import { UseAuth } from "../context/Auth"
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { NavLink } from "react-router-dom"
import AddContactModal from './form/AddContactModal';
import ProfileButton from './microComponets/ProfileButton';
import axios from "axios";
import ThreeDotView from "./microComponets/ThreedotView";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ handleChatWith, viewProfile }) {
    const [auth] = UseAuth();
    const [contacts, setContacts] = useState([]);
    const [calls, setCalls] = useState([]);
    const [chats, setChats] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    // const [chatWith, setChatWith] = useState("");

    const getContacts = async () => {
        const res = await axios.get("http://localhost:8000/api/auth/contacts");
        setContacts(res.data)

    }
    useEffect(() => {
        getContacts();
    }, [auth])




    const handleCheckboxChange = (contactId) => {
        setSelectedContacts((prevSelected) => {
            if (prevSelected.includes(contactId)) {
                return prevSelected.filter((id) => id !== contactId);
            } else {
                return [...prevSelected, contactId];
            }
        });
    };

    const [showAddToChatButton, setShowAddToChatButton] = useState(false);
    const [showMakeGroupButton, setShowMakeGroupButton] = useState(false);

    useEffect(() => {
        if (selectedContacts.length === 1) {
            setShowAddToChatButton(true);
            setShowMakeGroupButton(false);
        } else if (selectedContacts.length > 1) {
            setShowAddToChatButton(false);
            setShowMakeGroupButton(true);
        } else {
            setShowAddToChatButton(false);
            setShowMakeGroupButton(false);
        }
    }, [selectedContacts]);


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
                            key="chats"
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
                            key="contacts"
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
                            key="calls"
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
                            key="chats"
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
                        <Tab.Panel
                            key="contacts"
                            className={classNames(
                                'rounded-xl bg-white p-3 mb-20',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul className=" relative">
                                {contacts.map((contact) => (
                                    <li
                                        key={contact._id}
                                        className="relative rounded-md p-3 hover:bg-gray-300"
                                        onClick={() => handleCheckboxChange(contact._id)}
                                    >
                                        <div className=" flex flex-row">
                                            <div className="w-[25%] h-12">
                                                <img className="w-12 h-12 rounded-full" src={`http://localhost:8000/api/auth/profile-photo/${contact._id}`} alt="person" />
                                            </div>
                                            <div className="ms-2 w-[55%]">
                                                <h3 className="text-sm font-medium leading-5">
                                                    {contact.name}
                                                </h3>

                                                <ul className="mt-1 flex text-xs font-normal leading-4 text-gray-500 justify-between">
                                                    <li>{contact.email}</li>

                                                </ul>
                                            </div>
                                            <div className="ms-2 w-[10%]">
                                                <input
                                                    id={`addToChat-${contact._id}`}
                                                    name={`addToChat-${contact._id}`}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    checked={selectedContacts.includes(contact._id)}
                                                    onChange={() => handleCheckboxChange(contact._id)}
                                                />
                                            </div>
                                            <div className="w-[10%] z-10">
                                                <ThreeDotView id={contact._id} openProfile={openProfile} />
                                            </div>

                                            <NavLink

                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className=" absolute -translate-y-52 translate-x-32">{showAddToChatButton && (
                                <button className="text-white bg-blue-600 rounded-md shadow-xl p-2 mr-2">Add to Chat</button>
                            )}
                                {showMakeGroupButton && (
                                    <button className="text-white bg-green-600 rounded-md shadow-xl p-2">Make Group with {selectedContacts.length}</button>
                                )}</div>
                        </Tab.Panel>
                        <Tab.Panel
                            key="calls"
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {calls.map((call) => (
                                    <li
                                        key={call._id}
                                        className="relative rounded-md p-3 hover:bg-gray-300"
                                    >
                                        <div className=" flex flex-row">
                                            <div className="w-12 h-12">
                                                <img className=" rounded-full" src={call.photo} alt="person" />
                                            </div>
                                            <div className="ms-2">
                                                <h3 className="text-sm font-medium leading-5">
                                                    {call.name}
                                                </h3>

                                                <ul className="mt-1 flex text-xs font-normal leading-4 text-gray-500 justify-between">
                                                    <li>{call.email}</li>
                                                    <li className=" justify-between ms-3">last seen </li>
                                                </ul>
                                            </div>

                                            <NavLink
                                                onClick={() => openChatWith(call)}
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
                <ProfileButton name={auth?.user?.name} email={auth?.user?.email} id={auth?.user?._id} openProfile={openProfile} />
                <div>
                    <AddContactModal />
                </div>
            </div>
        </div>
    )
}


