import React from 'react'
import GroupUserIcon from '../Atoms/GroupUserIcon'
import UserIcon from '../Atoms/UserIcon'
import { Peoples } from '../Dummys/Peoples'

const userPicUrl = 'https://avatars.githubusercontent.com/u/810438?v=4'
const userName = 'Dan Abramov'

const ProfileCard = () => {
  return (
    <div className='flex flex-col items-center py-10 h-72'>
      <UserIcon picUrl={userPicUrl} />
      <p className='my-4 font-bold'>{userName}</p>

      <div className='flex items-center my-2 space-x-4 justify-evenly'>
        {Peoples.map(({ picUrl, name }) => (
          <GroupUserIcon picUrl={picUrl} key={name} />
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
