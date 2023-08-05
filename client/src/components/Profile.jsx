import React, { useState } from 'react';
import { UseAuth } from '../context/Auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = (props) => {
  const [auth, setAuth] = UseAuth();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(''); // Change to null to handle File object

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); // Create a new FormData object
      formData.append('name', name); // Append name to the form data
      formData.append('photo', photo); // Append the photo file to the form data

      const { data } = await axios.put(`http://localhost:8000/api/auth/profile`, formData);

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem('auth');
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem('auth', JSON.stringify(ls));
        toast.success('Profile Updated Successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div>
      <div className='h-[30vh] bg-amber-200'></div>
      <div>
      <div><img className='h-20 w-20 rounded-full -translate-y-10 translate-x-10' src={auth?.user.photo.data.data} alt={auth?.user?.name} /></div>
       <div>
       <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder={auth?.user.name}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
                <label className="w-full h-20">
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files)}
                    
                    className='w-full h-20'
                  />
                </label>
              </div>
          </div>
        </div>
        </div>

       

           

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
       </div>
      </div>
    </div>
  )
}

export default Profile
