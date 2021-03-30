import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const DropDown = () => {
  const [degree, setDegree] = useState(' rotate-0')

  const handleRotate = () => {
    setDegree((degree) =>
      degree === ' rotate-0' ? ' rotate-180' : ' rotate-0'
    )
  }

  return (
    <div>
      <button
        className='flex items-center px-2 my-2 text-sm font-light rounded-sm cursor-pointer focus:outline-none focus:ring-1 ring-orange ring-offset-orange ring-offset-1'
        onClick={handleRotate}
      >
        Monthly{' '}
        <span className={`mx-2 transform transition ${degree}`}>
          <IoIosArrowDown />
        </span>
      </button>
    </div>
  )
}

export default DropDown
