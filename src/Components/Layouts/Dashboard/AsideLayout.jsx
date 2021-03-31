import React from 'react'
import ProfileCard from './ProfileCard'
import TaskCompleteGraph from './TaskCompleteGraph'

const AsideLayout = () => {
  return (
    <aside className='col-start-10 col-end-13'>
      <ProfileCard />
      <TaskCompleteGraph />
    </aside>
  )
}

export default AsideLayout
