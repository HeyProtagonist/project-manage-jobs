import React from 'react'
import useTaskList from '../../hooks/useTaskList'
import CreateTaskCard from '../Chunks/CreateTaskCard'
import RenderPriorities from '../Chunks/RenderPriorities'
import TaskCard from '../Chunks/TaskCard'

const TaskListLayout = () => {
  const [taskListState, setTaskListState] = useTaskList()

  return (
    <div className='my-10'>
      <h4 className='font-semibold text-orange'>Task List</h4>

      <div>
        <RenderPriorities />
      </div>

      <div className='grid grid-cols-4 gap-8 my-8'>
        {taskListState
          .filter((task, i) => task.status === 'wip')
          .map((task) => (
            <TaskCard {...task} key={task.id.toString()} />
          ))}

        <CreateTaskCard setTaskListState={setTaskListState} />
      </div>
    </div>
  )
}

export default TaskListLayout
