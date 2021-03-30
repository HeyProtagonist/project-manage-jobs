import React from 'react'

const GroupUserIcon = ({ linkTo, picUrl}) => {
  return (
    <div className='object-fill w-8 h-8 overflow-auto bg-gray-500 rounded-full'>
      <a href={`${linkTo}`}>
        <img src={picUrl} alt='' />
      </a>
    </div>
  )
}

export default GroupUserIcon
