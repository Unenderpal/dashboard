import React from 'react'



const task = () => {
  const tasks = [
    {
      id: 1,
      title: "Build Dashboard UI",
      description: "Design and implement the main dashboard interface with responsive layout.",
      status: "In Progress",
      dueDate: "2025-08-28"
    },
    {
      id: 2,
      title: "Integrate API",
      description: "Connect the frontend with backend APIs for fetching and updating data.",
      status: "Pending",
      dueDate: "2025-09-01"
    },
    {
      id: 3,
      title: "Fix Authentication Bugs",
      description: "Resolve login and session handling issues reported by users.",
      status: "Completed",
      dueDate: "2025-08-20"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-200 to-blue-400  p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 '>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Tasks</h1>
        {/* Task list section */}
        <section className="space-y-6">
          {tasks.map(task => (
            <div
              key={task.id}
              className='flex item-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4'
              style={{
                borderColor: task.status === 'Completed' ? 'green' : task.status === 'In Progress' ? 'orange' : 'red'
              }}>
              <div className="flex flex-col">
                <h2 className='text-xl font-semibold text-gray-800'>{task.title}</h2>
                <p className='text-gray-600 mt-2 text-sm'>{task.description}</p>
                <p className='text-gray-600 mt-2 text-sm'>Due Date: {task.dueDate}</p>
              </div>
              <section className='flex space-x-4'>
                <span className={`px-4 py-1 flex items-center justify-center text-center text-sm rounded-lg    ${task.status === 'Completed' ? "bg-green-100 text-green-600 " : task.status === 'In Progress' ? "bg-orange-100 text-orange-600 " : "bg-red-100 text-red-600"}`}>{task.status}</span>
                <button className='px-4 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>Edit</button>
                {task.status !=='Completed' &&(
                <button className='px-4 py-1 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors'>Mark as Completed</button>
                )}
                <button className='px-4 py-1 text-white bg-gray-300 rounded-lg hover:bg-red-400 transition-colors'>Delete</button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default task