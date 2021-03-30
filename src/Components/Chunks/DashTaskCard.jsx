import React from 'react'

const DashTaskCard = ({ taskName, taskType, isWide, picUrl }) => {
  return (
    <div className='overflow-hidden rounded-3xl'>
      <img
        src={picUrl}
        alt='Sample'
        className={`h-48 mb-4 bg-white rounded-3xl shadow-lg object-cover
        ${isWide ? `w-72` : `w-40`}`}
      />
      <h3 className='px-4 my-2 text-sm font-bold tracking-wide'>{taskName}</h3>
      <h4 className='px-4 my-2 text-xs font-semibold tracking-wide'>
        {taskType}
      </h4>
    </div>
  )
}

export default DashTaskCard
