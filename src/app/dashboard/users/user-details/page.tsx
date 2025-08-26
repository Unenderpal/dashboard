import React from 'react'

const UserDetails = () => {
  const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Admin",
  status: "Active",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  activities: [
    { id: 1, description: "Updated password", timestamp: "2025-02-10" },
    { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
    { id: 3, description: "Logged in from a new device", timestamp: "2025-01-15" }
  ]
};

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-300 to-pink-100 p-6 '>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8  '>
        <div className=' flex items-center mb-8 '>
          <img src={user.profilePicture} alt="profile" className='h-20 w-20 rounded-full object-cover mr-6 '/>
          <div>
            <h1 className='text-3xl font-bold text-gray-800 '>{user.name }</h1>
            <p className='text-sm text-gray-600 '>{user.email}</p>
            <p className='text-sm text-gray-600 '>{user.role}</p>
            <p className={`text-sm mt-2 ${user.status === "Active" ? "text-green-500" : "text-red-500"}`}>{user.status}</p>
          </div>
        </div>
        {/* Bio section  */}
        <div className="mb-8"> 
          <h2 className='text-xl font-semibold text-gray-700 mb-4 '> About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
         {/* Activities timeline  */}

         <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4 '>Recent Activities</h2>
          <ul>
            {user.activities.map((activity)=>(
              <li key={activity.id} className='flex items-center space-x-4'>
                <div className='bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center '>
                  <span>A</span>
                </div>
                <div>
                  <p className='text-gray-700 '>{activity.description}</p>
                  <p className='text-gray-500 text-sm '>{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Action section  */}

         <div className='flex justify-end space-x-4 '>
          <button className='text-gray-700 px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-400 transition-colors '>Cancle</button>
  <button className='text-gray-700 px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 transition-colors '>Save changes</button>

         </div>
         </div>
      </div>
    </div>
  )
}

export default UserDetails