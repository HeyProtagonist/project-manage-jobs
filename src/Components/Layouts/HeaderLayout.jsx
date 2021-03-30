import React from 'react'
import SearchBar from '../Chunks/SearchBar'
import DateToday from '../Atoms/DateToday'
import MoreOptions from '../Atoms/MoreOptions'

const HeaderLayout = () => {
  return (
    <header className='flex flex-row items-center justify-between h-32 col-span-3 col-start-2 row-span-1 row-start-1 px-16'>
      <SearchBar />

      <div className='flex items-center space-x-8'>
        <DateToday />
        <MoreOptions />
      </div>
    </header>
  )
}

export default HeaderLayout
