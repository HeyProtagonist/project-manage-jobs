import React, { createContext, useEffect } from 'react'
import useTaskList from '../../hooks/useTaskList'
import TaskDoneLayout from '../Layouts/TaskDoneLayout'
import TaskListLayout from '../Layouts/TaskListLayout'

export const CardContext = createContext({
  markAsDone: null,
})

const MyTaskLayout = () => {
  const [taskListState, setTaskListState] = useTaskList()

  const markAsDone = (id) => {
    const task = taskListState.filter((task, i) => task.id === id)
    console.log(task)
    task[0].status = 'done'
    console.log(taskListState)
    setTaskListState(
      taskListState.filter((task, i) => task.id !== id).concat(task[0])
    )
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
