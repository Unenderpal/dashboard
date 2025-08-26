import React from 'react'

const account = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8' >
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 ' >
        <h1 className='text-gray-800 font-bold text-3xl mb-8'>
          Account Settings
        </h1>
            
          <div className='w-full space-y-4'>
            <h1 className='text-gray-700 text-2xl font-semibold '>Profile Settings </h1>
           
            <div className='space-y-2'>
           <h2 className='text-lg'>
              Name:
            </h2>
            <input type="text" defaultValue='John cena' className='mt- shadow-md rounded-lg block w-full focus:outline-none focus:ring-2  focus:ring-blue-500 borber border-gray-600' />
            </div>
            <div className='space-y-2'>
           <h2 className='text-lg'>
              E-mail:
            </h2>
            <input type="text" defaultValue='John.cena@example.com' className='mt- shadow-md block rounded-lg w-full focus:outline-none focus:ring-2  focus:ring-blue-500 borber border-gray-600' />
            </div>
          </div>
          <div className='w-full space-y-4'>
            <h1 className='text-gray-700 text-2xl font-semibold '>Security </h1>
           
            <div className='space-y-2'>
           <h2 className='text-lg'>
              Password:
            </h2>
            <input type="text" placeholder='Enter Password' className='mt- shadow-md rounded-lg block w-full focus:outline-none focus:ring-2  focus:ring-blue-500 borber border-gray-600' />
            </div>
            <div className='space-y-2'>
           <h2 className='text-lg'>
             Confirm Password:
            </h2>
            <input type="text" placeholder='Confirm Password' className='mt- shadow-md block rounded-lg w-full focus:outline-none focus:ring-2  focus:ring-blue-500 borber border-gray-600' />
            </div>
          </div>

 <div className=' flex justify-end space-x-4'>
  <button className='text-gray-700 px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-400 transition-colors '>Cancle</button>
  <button className='text-gray-700 px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 transition-colors '>Save changes</button>

        </div>

      </div>
    </div>
  )
}

export default account