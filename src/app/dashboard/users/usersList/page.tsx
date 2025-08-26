import React from 'react'

const UsersList = () => {
  const users = [
  {
    id: 1,
    name: "John cena",
    email: "john.cena@example.com",
    role: "Admin",
    status: "Active"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "Inactive"
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "User",
    status: "Active"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Moderator",
    status: "Pending"
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "User",
    status: "Active"
  },
  {
    id: 6,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    role: "Editor",
    status: "Inactive"
  }
];


  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-black-200 p-8  '>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8 '>
        <h1 className='text-3xl text-gray-800 font-bold p-8 mb-8 '>User List</h1>
        {/* usertable */}
        <div className='overflow-x-auto bg-white shadow-lg rounded-lg'>
          <table className='min-w-full table-auto'>
            <thead className='bg-blue-600 text-white '>
              <tr>
                <th className='px-3 py-4 text-left '>Name </th>
                <th className='px-3 py-4 text-left '>Email  </th>
                <th className='px-3 py-4 text-left '>Role </th>
                <th className='px-3 py-4 text-left'>status </th>
                <th className='px-3 py-4 text-left '>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(users =>(
                <tr key={users.id} className='border-t hover:bg-gray-50'>
                  <td className='px-4 py-4'>{users.name}</td>
                  <td className='px-4 py-4'>{users.email}</td>
                  <td className='px-4 py-4'>{users.role}</td>
                  <td className='px-4 py-4'><span className={`${users.status ==="Active " ? 'text-green-500': users.status==='Inactive' ? 'text-yellow-500' : "text-red-500"}`}>{users.status}</span></td>
                  <td className='px-4 py-4 text-center '> 
                    <button className='px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'>  
                      Edit            
                    </button >
                    <button className='ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>  View            
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UsersList