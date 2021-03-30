import React from 'react'
import { useDrag } from 'react-dnd'
import PriorityBadge from '../Atoms/PriorityBadge'
import ProfileIcon from '../Atoms/ProfileIcon'
import { ItemTypes } from '../utils/items'

const TaskCard = ({ id, taskName, taskType, peoples, priority }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    item: {
      id,
    },
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      key={id.toString()}
      ref={drag}
      className={isDragging ? 'opacity-50' : 'opacity-100'}
    >
      <div className='bg-white shadow-sm w-60 rounded-3xl'>
        <div className='p-4 space-y-2'>
          <h4 className='font-bold leading-none text-md'>{taskName}</h4>
          <h6 className='text-xs font-semibold '>{taskType}</h6>
          <div className='flex items-center justify-between space-x-2'>
            <div className='flex items-center mt-4 mb-2 space-x-2'>
              {peoples.map(({ picUrl, name }) => (
                <ProfileIcon picUrl={picUrl} key={name} />
              ))}
            </div>
            <PriorityBadge priority={priority} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
