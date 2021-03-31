import React, { createContext, useContext } from 'react'
import { TaskContext } from '../../App'
import TaskDoneLayout from './TaskDoneLayout'
import TaskWipLayout from './TaskWipLayout'

export const CardContext = createContext({
  markAsDone: null,
})

const TaskLayout = () => {
  const { taskListState, setTaskListState } = useContext(TaskContext)

  // useEffect(() => console.log('Rendered: TaskLayout'), [taskListState])

  const markAsDone = ({ id }) => {
    const task = taskListState.filter((task, i) => task.id === id)
    console.log(task[0].status)
    task[0].status = 'done'
    setTaskListState((state) => {
      return state.filter((task, i) => task.id !== id).concat(task[0])
    })
  }

  return (
    <CardContext.Provider value={{ markAsDone }}>
      <div>
        <h1 className='text-2xl font-extrabold'>My Task</h1>

        <TaskWipLayout />
        <TaskDoneLayout />
      </div>
    </CardContext.Provider>
  )
}

export default TaskLayout
