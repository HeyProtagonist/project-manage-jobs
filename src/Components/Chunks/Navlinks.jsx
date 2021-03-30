import React, { useState } from 'react'
import { HiHome } from 'react-icons/hi'
import { ImFolderOpen } from 'react-icons/im'
import { IoNotificationsOutline, IoStatsChartSharp } from 'react-icons/io5'
import { MdDone, MdMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const listStyles = `
  flex items-center flex-row font-semibold text-sm space-x-3 cursor-pointer
  hover:text-orange transition ring-orange focus:ring-2 rounded-md p-4
`
const iconStyles = `
  w-6 h-6
`

const links = [
  {
    id: 1,
    icon: <HiHome className={iconStyles} />,
    name: 'Dashboard',
    routeTo: '/',
  },
  {
    id: 2,
    icon: <MdDone className={iconStyles} />,
    name: 'My Task',
    routeTo: '/myTask',
  },
  {
    id: 3,
    icon: <MdMailOutline className={iconStyles} />,
    name: 'Message',
    routeTo: '/message',
  },
  {
    id: 4,
    icon: <IoNotificationsOutline className={iconStyles} />,
    name: 'Notification',
    routeTo: '/notification',
  },
  {
    id: 5,
    icon: <IoStatsChartSharp className={iconStyles} />,
    name: 'Statistics',
    routeTo: '/statistics',
  },
  {
    id: 6,
    icon: <ImFolderOpen className={iconStyles} />,
    name: 'My File',
    routeTo: '/myFile',
  },
]

const Navlinks = () => {
  const [isActive, setIsActive] = useState('Dashboard')

  return (
    <ul className='space-y-2'>
      {links.map(({ id, icon, name, routeTo }) => (
        <Link to={routeTo} key={id}>
          <div onClick={() => setIsActive(name)}>
            <li
              className={`${listStyles} ${isActive === name && 'text-orange'}`}
            >
              {icon}
              <p>{name}</p>
            </li>
          </div>
        </Link>
      ))}
    </ul>
  )
}

export default Navlinks
