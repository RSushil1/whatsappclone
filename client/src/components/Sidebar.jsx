import { UseAuth } from "../context/Auth"
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { NavLink } from "react-router-dom"
import AddContactModal from './AddContactModal';
import ProfileButton from './ProfileButton';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ handleChatWith,viewProfile }) {
    const [auth] = UseAuth();
    // const [chatWith, setChatWith] = useState("");
    let [categories] = useState({
        Chat: [
            {
                id: 1,
                name: 'Leslie Alexander',
                email: 'leslie.alexander@example.com',
                last_message: 'Co-Founder / CEO',
                imageUrl:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

                date: '3:23 AM',
            },
            {
                id: 2,
                name: 'Michael Foster',
                email: 'michael.foster@example.com',
                last_message: 'Co-Founder / CTO',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '3h ago',
                lastSeenDateTime: '2023-01-23T13:23Z',
            },
            {
                id: 3,
                name: 'Dries Vincent',
                email: 'dries.vincent@example.com',
                last_message: 'Business Relations',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '1h ago',
            },
            {
                id: 4,
                name: 'Lindsay Walton',
                email: 'lindsay.walton@example.com',
                last_message: 'Front-end Developer',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '3h ago',
                lastSeenDateTime: '2023-01-23T13:23Z',
            },
            {
                id: 5,
                name: 'Courtney Henry',
                email: 'courtney.henry@example.com',
                last_message: 'Designer',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '3h ago',
                lastSeenDateTime: '2023-01-23T13:23Z',
            },
            {
                id: 6,
                name: 'Courtney Henry',
                email: 'courtney.henry@example.com',
                last_message: 'Designer',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '3h ago',
                lastSeenDateTime: '2023-01-23T13:23Z',
            },
            {
                id: 7,
                name: 'Courtney Henry',
                email: 'courtney.henry@example.com',
                last_message: 'Designer',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                date: '3h ago',
                lastSeenDateTime: '2023-01-23T13:23Z',
            },
        ],
        Contacts: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Calls: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })


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
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
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
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative rounded-md p-3 hover:bg-gray-300"
                                        >
                                            <div className=" flex flex-row">
                                                <div className="w-12 h-12">
                                                    <img className=" rounded-full" src={post.imageUrl} alt="p" />
                                                </div>
                                                <div className="ms-2">
                                                    <h3 className="text-sm font-medium leading-5">
                                                        {post.name}
                                                    </h3>

                                                    <ul className="mt-1 flex text-xs font-normal leading-4 text-gray-500 justify-between">
                                                        <li>{post.last_message}</li>
                                                        <li className=" justify-between">last seen {post.date} </li>
                                                    </ul>
                                                </div>

                                                <NavLink
                                                    onClick={() => openChatWith(post)}
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
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className='flex flex-row justify-between text-white font-semibold p-1 bg-blue-900 z-10 h-[10vh]'>
                <ProfileButton name ={auth?.user?.name} id={auth?.user?.email} photo={auth?.user?.photo} openProfile={openProfile} />
                <div>
                    <AddContactModal />
                </div>
            </div>
        </div>
    )
}


