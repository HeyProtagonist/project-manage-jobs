import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import DateToday from '../Atoms/DateToday'
import { taskyDays } from '../Dummys/taskyDays'

const TaskyCalendar = () => {
  return (
    <div className='w-full h-40 my-10 overflow-hidden text-sm bg-gray-100 shadow-lg rounded-3xl'>
      <div className='flex justify-between px-8 py-6'>
        <div className='flex items-center space-x-2'>
          <BiCalendar className='w-6 h-6' />
          <p className='font-bold'>Project Schedule</p>
        </div>
        <DateToday />
      </div>

      <div className='flex items-center justify-between px-8'>
        {taskyDays.map(({ id, day, dayNo }) => (
          <div
            className={`shadow-sm ${
              (dayNo === 18 || dayNo === 22) && ' text-orange-light'
              }`}
            key={id}
          >
            <p className='font-light rows-start-1 rows-end-3'>{day}</p>
            <p className='text-lg font-semibold rows-start-3 rows-end-5'>
              {dayNo}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskyCalendar
