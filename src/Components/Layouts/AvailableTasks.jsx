import React from 'react'
import DashTaskCard from '../Chunks/DashTaskCard'

const DashCards = [
  {
    id: 1,
    taskName: 'Klawuarc Website',
    taskType: 'Landing Page',
    isWide: false,
    picUrl:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 2,
    taskName: 'Nike le Bran',
    taskType: 'Landing Page',
    isWide: false,
    picUrl:
      'https://images.unsplash.com/photo-1613740105081-e88271c0211f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 3,
    taskName: 'Molly Moreas',
    taskType: 'Photo Shoot',
    isWide: true,
    picUrl:
      'https://images.unsplash.com/photo-1616423016159-9fc60faef587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
]

const AvailableTasks = () => {
  return (
    <div className='flex items-center my-10 space-x-10 justify-evenly'>
      {DashCards.map((dashCard) => (
        <DashTaskCard {...dashCard} key={dashCard.id} />
      ))}
    </div>
  )
}

export default AvailableTasks
