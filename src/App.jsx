import React, { createContext } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HeaderLayout from './Components/Layouts/HeaderLayout'
import MainLayout from './Components/Layouts/MainLayout'
import NavigationBarLayout from './Components/Layouts/NavigationBarLayout'
import useTaskList from './hooks/useTaskList'

export const TaskContext = createContext({
  taskListState: null,
  setTaskListState: null,
})

function App({ children }) {
  const [taskListState, setTaskListState] = useTaskList()

  return (
    <TaskContext.Provider value={{ taskListState, setTaskListState }}>
      <div className='grid grid-cols-4 grid-rows-6 glassmorphism'>
        <NavigationBarLayout />
        <HeaderLayout />
        <DndProvider backend={HTML5Backend}>
          <MainLayout children={children} />
        </DndProvider>
      </div>
    </TaskContext.Provider>
  )
}

export default App
