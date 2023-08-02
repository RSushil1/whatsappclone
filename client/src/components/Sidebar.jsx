import { UseAuth } from "../context/Auth"
// import AddContactModal from "./AddContactModal";
// const people = [
//     {
//         name: 'Leslie Alexander',
//         email: 'leslie.alexander@example.com',
//         role: 'Co-Founder / CEO',
//         imageUrl:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Michael Foster',
//         email: 'michael.foster@example.com',
//         role: 'Co-Founder / CTO',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Dries Vincent',
//         email: 'dries.vincent@example.com',
//         role: 'Business Relations',
//         imageUrl:
//             'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: null,
//     },
//     {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com',
//         role: 'Front-end Developer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         role: 'Designer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         role: 'Designer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         role: 'Designer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         role: 'Designer',
//         imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         lastSeen: '3h ago',
//         lastSeenDateTime: '2023-01-23T13:23Z',
//     },

// ]

// export default function Sidebar() {
//     const [auth] = UseAuth();

//     return (
//         <div className=" h-screen">
//             <div className='flex flex-row justify-between text-white font-semibold p-5 bg-blue-900 z-10 h-[10vh]'>
//                 <div className='ms-5'>Chats</div>
//                 <div className='ms-5'>Contacts</div>
//                 <div className='ms-5'>Call</div>
//             </div>
//             <ul role="list" className="divide-y divide-gray-100 ms-5 h-[80vh] overflow-y-auto">
//                 {people.map((person) => (
//                     <li key={person.email} className="flex py-5 hover:bg-blue-200">
//                         <div className="flex">
//                             <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
//                             <div className="min-w-0 flex-auto">
//                                 <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
//                                 <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
//                             </div>
//                         </div>
//                         <div className="sm:flex sm:flex-col sm:items-end">

//                             {person.lastSeen ? (
//                                 <p className="mt-1 text-xs leading-5 text-gray-500">
//                                     Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//                                 </p>
//                             ) : (
//                                 <div className="mt-1 flex items-center gap-x-1.5 m-5">
//                                     <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                                     </div>
//                                     <p className="text-xs leading-5 text-gray-500">Online</p>
//                                 </div>
//                             )}
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             <div className='flex flex-row justify-between text-white font-semibold p-1 bg-blue-900 z-10 h-[10vh]'>
//                 <div className='ms-5'>Welcome: {auth?.user?.name} <br /> ID: {auth?.user.email}</div>
//                 <div><button onClick={()=>AddContactModal()}><svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" id="contacts"><rect width="48" height="48" x="8" y="8" fill="url(#paint0_linear)" rx="8"></rect><g filter="url(#filter0_if)"><rect width="48" height="48" x="8" y="8" fill="#fff" fill-opacity=".08" rx="8"></rect></g><g filter="url(#filter1_if)"><rect width="48" height="48" x="8" y="8" fill="#fff" fill-opacity=".08" rx="8"></rect></g><g filter="url(#filter2_i)"><path fill="#fff" d="M31.1498 35.7434C32.4916 34.8522 33.5107 33.5527 34.0565 32.0372C34.6022 30.5217 34.6455 28.8708 34.1801 27.3287C33.7146 25.7867 32.765 24.4355 31.4719 23.4751C30.1788 22.5147 28.6108 21.9961 27.0001 21.9961C25.3893 21.9961 23.8213 22.5147 22.5282 23.4751C21.2351 24.4355 20.2855 25.7867 19.8201 27.3287C19.3546 28.8708 19.3979 30.5217 19.9437 32.0372C20.4894 33.5527 21.5085 34.8522 22.8503 35.7434C20.563 36.5872 18.5862 38.1061 17.1818 40.0989C17.0764 40.2486 17.0141 40.4245 17.0018 40.6072C16.9895 40.79 17.0276 40.9726 17.1119 41.1352C17.1963 41.2978 17.3237 41.434 17.4802 41.5291C17.6368 41.6243 17.8164 41.6746 17.9996 41.6746L36.0001 41.6739C36.1833 41.6739 36.3629 41.6236 36.5195 41.5284C36.676 41.4333 36.8034 41.297 36.8877 41.1344C36.9721 40.9718 37.0102 40.7892 36.9978 40.6065C36.9855 40.4237 36.9232 40.2479 36.8177 40.0981C35.4134 38.1057 33.4368 36.5871 31.1498 35.7434Z"></path><path fill="#fff" d="M47.0079 40.0982C45.6036 38.1057 43.627 36.5871 41.34 35.7434C42.827 34.7536 43.9118 33.2657 44.3993 31.5473C44.8869 29.8289 44.7451 27.9929 43.9996 26.3697C43.254 24.7465 41.9536 23.4426 40.3324 22.6928C38.7112 21.943 36.8756 21.7964 35.1559 22.2794C34.9998 22.3233 34.8567 22.4046 34.7389 22.5161C34.6212 22.6276 34.5324 22.7661 34.4801 22.9196C34.4278 23.0731 34.4136 23.237 34.4388 23.3973C34.4639 23.5575 34.5277 23.7092 34.6245 23.8392C35.7549 25.3577 36.4048 27.1799 36.4904 29.0711C36.5759 30.9622 36.0933 32.8356 35.1046 34.45C34.9741 34.6629 34.9279 34.917 34.9752 35.1622C35.0225 35.4074 35.1598 35.6261 35.3602 35.7752C35.7394 36.0573 36.1042 36.3583 36.4532 36.677C36.4712 36.6966 36.4894 36.7161 36.5093 36.7345C37.844 37.9684 38.9258 39.4504 39.6942 41.0977C39.7747 41.2701 39.9027 41.4159 40.0632 41.5181C40.2237 41.6203 40.4101 41.6746 40.6003 41.6746L46.1904 41.6739C46.3736 41.6739 46.5532 41.6235 46.7097 41.5284C46.8662 41.4333 46.9936 41.297 47.0779 41.1344C47.1623 40.9718 47.2004 40.7892 47.188 40.6065C47.1757 40.4237 47.1134 40.2479 47.0079 40.0981L47.0079 40.0982Z"></path></g><defs><filter id="filter0_if" width="56" height="56" x="4" y="4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology in="SourceAlpha" radius="1" result="effect1_innerShadow"></feMorphology><feOffset dx="4" dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow"></feBlend><feGaussianBlur result="effect2_foregroundBlur" stdDeviation="2"></feGaussianBlur></filter><filter id="filter1_if" width="56" height="56" x="4" y="4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology in="SourceAlpha" radius="1" result="effect1_innerShadow"></feMorphology><feOffset dx="-4" dy="-4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow"></feBlend><feGaussianBlur result="effect2_foregroundBlur" stdDeviation="2"></feGaussianBlur></filter><filter id="filter2_i" width="31.191" height="20.678" x="15.999" y="20.996" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="-1" dy="-1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow"></feBlend></filter><linearGradient id="paint0_linear" x1="8" x2="56" y1="8" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="#FF00C7"></stop><stop offset="1" stop-color="red"></stop></linearGradient></defs></svg></button></div>
//             </div>
//         </div>
//     )
// }

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { NavLink } from "react-router-dom"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    let [categories] = useState({
        Chat: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
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

    return (
        <div>
            <div className="w-full max-w-md px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
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
                                            className="relative rounded-md p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li>&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>

                                            <NavLink
                                                to="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}


