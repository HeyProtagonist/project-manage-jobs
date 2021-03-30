import React, { useState } from 'react'

const dashLinks = [
  { id: 1, name: 'New Task' },
  { id: 2, name: 'Task List' },
  { id: 3, name: 'Timeline' },
  { id: 4, name: 'Progress' },
  { id: 5, name: 'Form' },
  { id: 6, name: 'More...' },
]

const DashLinks = () => {
  const [isActive, setIsActive] = useState('New Task')

  return (
    <div className='my-10'>
      <ul className='flex items-center space-x-10'>
        {dashLinks.map(({ id, name }) => (
          <li key={id}>
            <button
              onClick={() => setIsActive(name)}
              className={`text-xs font-bold ${
                isActive === name && 'text-orange'
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DashLinks
