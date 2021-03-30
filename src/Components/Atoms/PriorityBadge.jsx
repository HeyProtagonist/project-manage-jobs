import React from 'react'

const PriorityBadge = ({ priority }) => {
  const getColor = (priority) => {
    switch (priority) {
      case 'low':
        return 'bg-blue-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'high':
        return 'bg-red-500'
      default:
        return 'bg-transparent'
    }
  }

  return (
    <div className='flex items-center mt-4 mb-2'>
      <button
        className={`${getColor(
          priority
        )} rounded-full py-1 px-2 text-white w-10 h-6`}
      ></button>
    </div>
  )
}

export default PriorityBadge
