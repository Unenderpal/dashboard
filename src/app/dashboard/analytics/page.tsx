import React from 'react'

const analytics = () => {
  const metrics = [
  {
    title: "Total Tasks",
    value: 120,
    change: +12,
    isPositive: true
  },
  {
    title: "Completed Tasks",
    value: 85,
    change: +8,
    isPositive: true
  },
  {
    title: "Pending Tasks",
    value: 35,
    change: -5,
    isPositive: false
  },
  {
    title: "Overdue Tasks",
    value: 10,
    change: -3,
    isPositive: false
  }
];

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-200 to-pink-400  p-6'>
      <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 '>
        <h1 className='text-gray-800 font-bold text-3xl mb-8'>Analytics Dashboard</h1>
        {/* Overview Metrics section */}
        <div className="grid grid-cols-1 sm:grids-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric,index)=>(
            <div key={index} className={`flex justify-between items-center bg-white rounded-lg shadow-md border-l-4 ${metric.isPositive ? "border-green-500" : "border-red-500"}`}>
              <div>
                <h2 className='text-xl font-semibold text-gray-800'>{metric.title}</h2>
                <p className='text-lg text-gray-600 mt-2'>{metric.value}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm mt-2 mr-2 ${metric.isPositive ? "text-green-600" : "text-red-600"}`}>{metric.change}</p>
              </div>
            </div>
          ))}

        </div>
{/* chart section (placeholder for graph) */}
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Website traffic
          </h2>
          <div className="bg-gray-100 rounded-lg h-72 ">Charts Placeholders</div>
        </div>
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Website traffic
          </h2>
          <div className="bg-gray-100 rounded-lg h-72 ">Charts Placeholders</div>
        </div>
         {/* Recent activities */}
      <div className="mb-8">
        <h2 className='text-2xl font-semibold text-grey-600 mb-4'>Recent Activities</h2>
        <ul className="space-y-4">
          <li className='flex item-center justify-between rounded-sm shadow-md bg-white p-4  '>
            <div>
              <h3 className='text-lg font-semibold text-gray-700'>User registration </h3>
              <p className="text-sm text-gray-600">New user signed up on 20-05-2025</p>
            </div>
            <div>
              <p className='text-sm text-gray-500'>+10 users</p>
            </div>
          </li>
          <li className='flex item-center justify-between rounded-sm shadow-md bg-white p-4  '>
            <div>
              <h3 className='text-lg font-semibold text-gray-700'>Sales increase </h3>
              <p className="text-sm text-gray-600">Sales grew up by 12% on 25-05-2025</p>
            </div>
            <div>
              <p className='text-sm text-gray-500'>+ Rs15000000000</p>
            </div>
          </li>
          <li className='flex item-center justify-between rounded-sm shadow-md bg-white p-4  '>
            <div>
              <h3 className='text-lg font-semibold text-gray-700'>Website traffic surge </h3>
              <p className="text-sm text-gray-600">Traffic increased by 8% on 2025-07-26</p>
            </div>
            <div>
              <p className='text-sm text-gray-500'>+250 visits</p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default analytics