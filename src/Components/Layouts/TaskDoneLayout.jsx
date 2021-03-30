import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import useTaskList from '../../hooks/useTaskList'
import TaskCard from '../Chunks/TaskCard'
import { ItemTypes } from '../utils/items'
import { CardContext } from './MyTaskLayout'

const TaskDoneLayout = () => {
  const [taskListState, setTaskListState] = useTaskList()
  const { markAsDone } = useContext(CardContext)

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: (item, moniter) => markAsDone(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  )

  return (
    <div
      ref={drop}
      className={`my-10 ${
        isOver ? 'bg-green-200 bg-opacity-40' : 'bg-transparent'
      }`}
    >
      <h4 className='font-semibold text-orange'>Task Done</h4>

      <div className='grid grid-cols-4 gap-8 my-8'>
        {taskListState
          .filter((task, i) => task.status === 'done')
          .map((task) => (
            <TaskCard {...task} key={task.id} />
          ))}
      </div>
    </div>
  )
}

export default TaskDoneLayout
