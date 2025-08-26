import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-400  p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6  '>
        <h1 className='text-3xl font-boldtext-gray-800 mb-8'>Profile Settings </h1>

        {/* profile picture setting */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Profile Picture </h2>
          <div className='flex items-center space-x-4'></div>
          <div className="w-24 h-24 rounded-full bg-gray-300">
            <img src="https://imgs.search.brave.com/HKbk3CMkR4-LekLggN6I_cVdIzp30tHcMEQ4KMdvwj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU0Lzcy/L2QxLzU0NzJkMWIw/OWQzZDcyNDIyODEw/OWQzODFkNjE3MzI2/LmpwZw" className='h-full w-full rounded-full object-cover' alt="" />
          </div>
          <div>
            <button className='px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-color '>
              Change Profile 
            </button>
          </div>
        </section>
        {/* profile info section  */}
        <section className='mb-8 '>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'> Profile Information </h2>
          <div className="space-y-4">
            <div>
              <label className='block text-sm font-medium text-gray-600 '> Full Name</label>
              <input type="text" defaultValue='John cena' className='mt-1 block w-full px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-blue-500'/>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600 '> username</label>
              <input type="text" defaultValue='John_cena' className='mt-1 block w-full px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-blue-500'/>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600 '> E-mail address </label>
              <input type="text" defaultValue='John.cena@example.com' className='mt-1 block w-full px-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-blue-500'/>
            </div>
          </div>
        </section>
        <div className=' flex justify-end space-x-4'>
  <button className='text-gray-700 px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-400 transition-colors '>Cancle</button>
  <button className='text-gray-700 px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 transition-colors '>Save changes</button>

        </div>
      </div>
    </div>
  )
}

export default Profile