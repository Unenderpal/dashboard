import React from 'react'

const Notification  = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-yellow-200 to-green-400  p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 '>
        <h1 className='text-4xl font-extrabold text-gray-950 mb-6'>
          Notifications
        </h1>
        {/* notification settings */}
        <div className="mb-8">
          <h2 className='text-xl font-semibold text-gray-700 mb-4 '>Notification preference</h2>
          <div className="space-y-4">
            <div>
              <label className='block text-sm font-medium text-gray-600  '>E-mail notification</label>
              <select className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500' >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600  '>SMS notification</label>
              <select className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500' >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-600  '> Push Notification</label>
               <select className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500' >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
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

export default Notification 