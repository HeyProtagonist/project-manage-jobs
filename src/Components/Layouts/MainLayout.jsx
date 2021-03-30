import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className='col-span-3 col-start-2 row-span-6 row-start-2 px-16'>
      {/*  */}
      {children}
      {/*  */}
    </div>
  )
}

export default MainLayout
