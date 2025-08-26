import Link from 'next/link'
import React from 'react'

const DashBoard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200  p-6'>
   <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 '>
    <div className='flex flex-col '>
      <h1 className='text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0'>
        DashBoard
      </h1>
      <p className='text-gray-600 mt-2'>
        Welcome to your dashboard! Here you can manage your tasks, track analytics, and stay organized.
      </p>
    </div>
          {/* DashBoard grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* dashboard/task */}
          <Link className='bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105   ' href='dashboard/task'>
             <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-blue-800'>tasks
              </h2>
                <span className='text-3xl text-blue-800'>
                    📝
                </span>
             </div>
             <p className='text-gray-600 mt-2'>View, organize and manage your daily tasks.</p>
            </Link>
             {/* dashboard/analytics */}
          <Link className='bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105   ' href='dashboard/analytics'>
             <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-green-800'>Analytics
              </h2>
                <span className='text-3xl text-green-800'>
                    📊
                </span>
             </div>
             <p className='text-gray-600 mt-2'>Gain insights into your performance and trends.</p>
            </Link>
             {/* dashboard/settings */}
          <Link className='bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105   ' href='dashboard/settings'>
             <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-purple-800'>Settings
              </h2>
                <span className='text-3xl text-purple-800'>
                    ⚙️
                </span>
             </div>
             <p className='text-gray-600 mt-2'>customize your dashboard settings.</p>
            </Link>
             {/* dashboard/users */}
          <Link className='bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105   ' href='dashboard/users'>
             <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-yellow-800'>users
              </h2>
                <span className='text-3xl text-yellow-800'>
                    👥
                </span>
             </div>
             <p className='text-gray-600 mt-2'>View and manage your users base.</p>
            </Link>
          </div>
   </div>

    </div>
  )
}

export default DashBoard