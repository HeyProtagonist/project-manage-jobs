import React from 'react'
import ProfileCard from '../Layouts/ProfileCard'
import TaskComplete from '../Layouts/TaskComplete'

const AsideLayout = () => {
  return (
    <aside className='col-start-10 col-end-13'>
      <ProfileCard />
      <TaskComplete />
    </aside>
  )
}

export default AsideLayout
