import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar = () => {
  return (
    <div className='relative w-6/12 shadow-md rounded-2xl'>
      <div className='absolute mx-2 top-2'>
        <MdSearch className='w-5 h-5' />
      </div>
      <input
        type='text'
        name='search'
        id='search'
        className='w-full px-10 py-2 text-sm font-semibold transition outline-none rounded-2xl focus:ring-2 ring-orange ring-offset-1 ring-offset-transparent'
        placeholder='Search'
      />
    </div>
  )
}

export default SearchBar
