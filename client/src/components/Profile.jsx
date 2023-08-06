import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import UpdateProfileModal from './form/UpdateProfileModal';
import { UseAuth } from '../context/Auth';

const Profile = () => {
  const [profile, setProfile] = useState("");
  const [auth, setAuth] = UseAuth()

  const getProfile = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/auth/profile');
      setProfile(res.data);
      setAuth({
        ...auth,
        user: res.data,
      });
      console.log(auth)
      localStorage.setItem("whatsapp", JSON.stringify(auth));

    } catch (error) {
      toast.error("Server not responded, contact to service");
    }
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
      <div className='h-[90vh] m-5 justify-center shadow-2xl bg-white rounded-lg p-3 overflow-y-auto'>

        <div><img className='rounded-lg w-full bg-blue-500 h-[30vh]' src={auth?.user?.coverPhoto} alt={auth?.user?.name} /></div>
        <div className='flex flex-row m-3'>
        <div className='w-[20%]'><img className='h-32 w-32 rounded-full' src={auth?.user?.photo} alt={auth?.user?.name} />
        <UpdateProfileModal/></div>

        <div className='w-[80%]'>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Whatsapp Profile</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
          </div>
          <div className="mt-1">
           
              <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Name:</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth?.user?.name}</dd>
              </div>
              <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth?.user?.email}</dd>
              </div>
              <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {auth?.user?.bio}
                </dd>
              </div>
             
          
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Profile
