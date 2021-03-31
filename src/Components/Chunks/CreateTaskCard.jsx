import React, { useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import InputCard from '../Chunks/InputCard'

const CreateTaskCard = () => {
  const [toggleTransform, setToggleTransform] = useState(false)

  const transformDiv = () => setToggleTransform(!toggleTransform)

  return (
    <>
      <div className={!toggleTransform ? 'visible' : 'hidden'}>
        <div
          className='flex items-center justify-around h-32 transition bg-white shadow-sm cursor-pointer w-60 rounded-3xl'
          onClick={transformDiv}
        >
          <div className='flex items-center justify-around space-y-2 border rounded-full shadow-xl w-14 h-14 hover:shadow-2xl'>
            <IoAddOutline className='w-10 h-10 text-gray-500' />
          </div>
        </div>
      </div>

      <InputCard
        toggleTransform={toggleTransform}
        transformDiv={transformDiv}
        setToggleTransform={setToggleTransform}
      />
    </>
  )
}

export default CreateTaskCard
