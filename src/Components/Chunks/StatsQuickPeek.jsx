import React from 'react'
import { CgProfile } from 'react-icons/cg'
import {
  IoCheckmarkDoneCircleOutline,
  IoReloadCircleOutline,
} from 'react-icons/io5'

const iconClasses = `w-5 h-5`

const stats = [
  {
    id: 1,
    icon: <CgProfile className={iconClasses} />,
    name: 'Clients',
    colProp: 'col-start-1 col-end-2',
    values: 1000,
  },
  {
    id: 2,
    icon: <IoCheckmarkDoneCircleOutline className={iconClasses} />,
    name: 'Current Task',
    colProp: 'col-start-2 col-end-4',
    values: 1000,
  },
  {
    id: 3,
    icon: <IoReloadCircleOutline className={iconClasses} />,
    name: 'Project Negotiations',
    colProp: 'col-start-4 col-end-7',
    values: 1000,
  },
]

const StatsQuickPeek = () => {
  return (
    <div className='grid my-16 grid-col-6 gap-x-4'>
      {stats.map(({ id, icon, name, colProp, values }) => (
        <div
          className={`flex justify-between px-4 py-3 text-white text-md bg-orange-light rounded-2xl item-center cursor-pointer ${colProp}`}
          key={id}
        >
          <div className='flex items-center space-x-2'>
            {icon}
            <p className='text-sm'>{name}</p>
          </div>

          <p className='text-sm'>{values}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsQuickPeek
