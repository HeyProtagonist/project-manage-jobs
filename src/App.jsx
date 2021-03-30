import React from 'react'
import HeaderLayout from './Components/Layouts/HeaderLayout'
import NavigationBarLayout from './Components/Layouts/NavigationBarLayout'
import MainLayout from './Components/Layouts/MainLayout'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App({ children }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='grid grid-cols-4 grid-rows-6 glassmorphism'>
        <NavigationBarLayout />
        <HeaderLayout />
        <MainLayout children={children} />
      </div>
    </DndProvider>
  )
}

export default App
