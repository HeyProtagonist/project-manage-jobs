import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import NavLinks from '../Chunks/Navlinks'

const NavigationBarLayout = () => {
  return (
    <div className='flex flex-col items-center col-span-1 col-start-1 row-span-6 row-start-1 font-bold bg-gray-100'>
      <div className='flex items-center m-16 space-x-4 uppercase'>
        <MdWork className='w-8 h-8 text-orange' />
        <h1>
          <span className='text-orange'>right</span>work
        </h1>
      </div>
      <nav className='flex flex-col justify-between space-y-32 ml-28 place-self-start'>
        <NavLinks />

        <div className='flex items-center space-x-4 cursor-pointer hover:text-orange'>
          <IoLogOutOutline className='w-8 h-8 transform rotate-180' />
          <p>Logout</p>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBarLayout
