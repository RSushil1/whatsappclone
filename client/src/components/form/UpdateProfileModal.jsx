import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'
import axios from 'axios';
import { UseAuth } from '../../context/Auth';

export default function UpdateProfileModal() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");
    const [auth, setAuth] = UseAuth();
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // form function
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("bio", bio);
            formData.append("password", password);
            formData.append("photo", photo);
            formData.append("coverPhoto", coverPhoto);
            const res = await axios.put('http://localhost:8000/api/auth/profile', formData);

            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.updatedUser,
                  });
                  localStorage.setItem("whatsapp", JSON.stringify(auth));
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error('Something Went Wrong!');
        }
    };
 


    return (
        <>
            <div className="inset-0 flex items-center justify-center">
               <button onClick={openModal }>Update Profile</button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30 w-5" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" h-[90vh] w-[70vw] transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Update Profile
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form onSubmit={handleUpdate}>
                                            <div className="space-y-12">
                                                <div className="border-b border-gray-900/10 pb-12">
                                                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                                                        <div className="sm:col-span-1">
                                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Username
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                id="name"
                                                                autoComplete="name"
                                                                className="border rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="janesmith"
                                                            />
                                                        </div>
                                                        <div className="sm:col-span-1">
                                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Password
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                id="password"
                                                                autoComplete="password"
                                                                className="border rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="janesmith"
                                                            />
                                                        </div>


                                                        <div className="col-span-full">
                                                            <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Bio
                                                            </label>
                                                            <div className="mt-2">
                                                                <textarea
                                                                    id="bio"
                                                                    name="bio"
                                                                    value={bio}
                                                                    onChange={(e) => setBio(e.target.value)}
                                                                    rows={3}
                                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    defaultValue={''}
                                                                />
                                                            </div>
                                                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                                        </div>

                                                        <div className="col-span-full">
                                                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Photo
                                                            </label>
                                                            <div className="mt-2 flex items-center gap-x-3">
                                                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                                                {photo ? photo.name : "Upload Photo"}
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={(e) => setPhoto(e.target.files[0])}
                                                                    name="photo"

                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-full">
                                                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Cover photo
                                                            </label>
                                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                                <div className="text-center">
                                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                        <label
                                                                            htmlFor="coverPhoto-upload"
                                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                        >
                                                                            <span>{coverPhoto ? coverPhoto.name : "Upload cover photo"}</span>

                                                                            <input id="coverPhoto-upload"
                                                                                type="file"
                                                                                accept="image/*"
                                                                                onChange={(e) => setCoverPhoto(e.target.files[0])}
                                                                                name="coverPhoto"
                                                                                className="sr-only" />
                                                                        </label>
                                                                        <p className="pl-1">or drag and drop</p>
                                                                    </div>
                                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG,JPEG up to 5MB</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button
                                                    onClick={closeModal}
                                                    type="submit"
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
