import { useState } from 'react'
import { taskList } from '../Components/Dummys/taskList'

const useTaskList = () => {
  const [taskListState, setTaskListState] = useState(taskList)
  return [taskListState, setTaskListState]
}

export default useTaskList
