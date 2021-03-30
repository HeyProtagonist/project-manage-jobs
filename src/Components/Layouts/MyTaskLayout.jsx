import React, { createContext, useContext } from 'react'
import { TaskContext } from '../../App'
import TaskDoneLayout from '../Layouts/TaskDoneLayout'
import TaskListLayout from '../Layouts/TaskListLayout'

export const CardContext = createContext({
  markAsDone: null,
})

const MyTaskLayout = () => {
  const { taskListState, setTaskListState } = useContext(TaskContext)

  const markAsDone = (id) => {
    const task = taskListState.filter((task, i) => task.id === id)
    task[0].status = 'done'
    setTaskListState(
      taskListState.filter((task, i) => task.id !== id).concat(task[0])
    )
    console.log(taskListState)
  }

  return (
    <CardContext.Provider value={{ markAsDone }}>
      <div>
        <h1 className='text-2xl font-extrabold'>My Task</h1>

        <TaskListLayout />
        <TaskDoneLayout />
      </div>
    </CardContext.Provider>
  )
}

export default MyTaskLayout
