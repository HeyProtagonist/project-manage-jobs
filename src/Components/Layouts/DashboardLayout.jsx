import React from 'react'
import AsideLayout from './AsideLayout'
import DashLinks from './DashLinks'
import AvailableTasks from './AvailableTasks'
import StatsQuickPeek from '../Chunks/StatsQuickPeek'
import TaskyCalendar from '../Layouts/TaskyCalendar'

const DashboardLayout = () => {
  return (
    <div className='grid h-auto grid-cols-12'>
      <div className='col-start-1 col-end-10 pr-10'>
        <h1 className='text-2xl font-extrabold'>Dashboard</h1>

        <DashLinks />

        <AvailableTasks />

        <StatsQuickPeek />

        <TaskyCalendar />
      </div>

      <AsideLayout />
    </div>
  )
}

export default DashboardLayout
