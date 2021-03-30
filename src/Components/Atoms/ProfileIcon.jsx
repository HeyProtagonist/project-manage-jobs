import React from 'react'

const ProfileIcon = ({ picUrl, linkTo }) => {
  return (
    <div className='object-fill w-6 h-6 overflow-auto bg-gray-500 rounded-full'>
      <a href={`${linkTo}`}>
        <img src={picUrl} alt='' />
      </a>
    </div>
  )
}

export default ProfileIcon
