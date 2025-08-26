import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-500 flex flex-col items-center justify-center p-6'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-grey-600 mb-6 py-2 px-4 '>
        Welcome to app dashboard
        </h1>
        <p className='text-grey-400 text-lg'>
         Manage your task ,track analytics  and stay oragnised with our powerful dashboard.         
        </p>
      <Link  className='items-center justify-center bg-blue-500 inline-flex text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl' href='/dashboard'>
        Go to Dashboard
      </Link>
      </div>
    </div>
  )
}

export default Home