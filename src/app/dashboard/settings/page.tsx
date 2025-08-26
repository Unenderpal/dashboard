import Link from 'next/link'
import React from 'react'

const Settings = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-200 to-red-400  p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 '>
        <h1 className='text-4xl font-extrabold text-gray-950 mb-6'>Settings</h1>
        <p> Customize your accout settings, profile, and notifications here.
          chose an option from the sidebar to begin.
        </p>
        <div className="flex space-x-4">
          <div className='w-1/4 bg-gray-100 p-4 rounded-lg space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Quick links</h2>
            <ul className='space-y-3'>
              <li>
                < Link className='flex text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50' href='/dashboard/settings/account'><span>Account </span></Link>

              </li>
                  <li>
                    < Link className='flex text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50' href='/dashboard/settings/notification'><span>Notifications </span></Link>

                  </li>
                  <li>
                    < Link className='flex text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-50' href='/dashboard/settings/profile'><span>Profile </span></Link>

                  </li>
            </ul>
          </div>
          <div className='flex-1 rounded-md bg-white p-8 shadow-md'>
              <h2 className='text-3xl font-semibold text-gray-900 mb-6'>Select a Settings</h2>
                  <p className='text-lg text-gray-700 max-w-3xl'> select an option from the sidebar to manage your account, notificattions or profile</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Settings