import Link from 'next/link'
import React from 'react'

const users = () => {
  return (
    <div className='bg-gradient-to-br from-green-50 to-green-300 min-h-screen p-6  '>
      <div className='max-w-4xl mx-auto bg-white p-5 rounded-lg shadow-xl'>
        <h1 className='text-4xl font-bold  text-gray-800 mb-6  ' >Users</h1>
        <p className="text-lg text-gray-600 mb-8">Manage your users here. you can view deatailed information or browse a list of users.  </p>
      {/* user-related section  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <Link className='bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow' href='/dashboard/users/user-details'>
        <h2 className='text-xl font-semibold text-teal-800 mb-2 '> Users Details</h2>
        <p className='text-gray-600'>view detailed information about each user in your system </p>
        </Link>
      {/* user-list card  */}
      <Link className='bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow' href='/dashboard/users/usersList'>
        <h2 className='text-xl font-semibold text-orange-800 mb-2 '> Users list </h2>
        <p className='text-gray-600'>Browse and manage all users in the system </p>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default users