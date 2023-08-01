import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className='flex flex-row justify-between text-white font-semibold p-5 bg-green-600 z-10'>
                <div className='ms-5'>Chats</div>
                <div className='ms-5'>Status</div>
                <div className='ms-5'>Call</div>
            </div>
            <div className=' overflow-y-scroll h-[80vh]'>
                <div className=' relative'>
                    <div>
                        <ul role="list" class="z-0 p-6 divide-y divide-slate-200">
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>
                            <li class="flex py-4 first:pt-0 last:pb-0">
                                <img class="h-10 w-10 rounded-full" src="img/avatar.png" alt="" />
                                <div class="ml-3 overflow-hidden">
                                    <p class="text-sm font-medium text-slate-900">Sushil Rathore</p>
                                    <p class="text-sm text-slate-500 truncate">hi...</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                </div>
                <div className='fixed justify-end'>
                    <svg className='w-12 h-12 z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-button"><g data-name="Layer 2"><circle cx="12" cy="12" r="10.75" fill="#4285f4"></circle><path fill="#fff" d="M12,16.75a.7502.7502,0,0,1-.75-.75V8a.75.75,0,0,1,1.5,0v8A.7502.7502,0,0,1,12,16.75Z"></path><path fill="#fff" d="M16,12.75H8a.75.75,0,0,1,0-1.5h8a.75.75,0,0,1,0,1.5Z"></path></g></svg>
                </div>

          
        </div>
    )
}

export default Sidebar
