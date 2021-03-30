import React from 'react'

const UserIcon = ({ linkTo, picUrl }) => {
  return (
    <div className='object-fill w-20 h-20 overflow-auto bg-gray-500 rounded-full'>
      <a href={`${linkTo}`}>
        <img src={picUrl} alt='' />
      </a>
    </div>
  )
}

export default UserIcon
