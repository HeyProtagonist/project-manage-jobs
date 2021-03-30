import React from 'react'

const priorities = [
  {
    priority: 'Low',
    color: 'bg-blue-500',
  },
  {
    priority: 'Medium',
    color: 'bg-yellow-400',
  },
  {
    priority: 'High',
    color: 'bg-red-500',
  },
]

const RenderPriorities = () => {
  return (
    <div className='flex items-center justify-end space-x-4 text-xs text-white'>
      {priorities.map(({ priority, color }) => (
        <button className={`${color} rounded-full py-1 px-2`} key={priority}>
          {priority}
        </button>
      ))}
    </div>
  )
}

export default RenderPriorities
