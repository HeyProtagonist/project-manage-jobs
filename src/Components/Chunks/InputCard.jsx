import React, { useContext, useState } from 'react'
import { MdDone } from 'react-icons/md'
import { VscClose } from 'react-icons/vsc'
import { TaskContext } from '../../App'
import { peoples } from '../Dummys/peoples'

const initialCardState = {
  taskName: '',
  taskType: '',
  priority: 'low',
}

const InputCard = ({ toggleTransform, transformDiv }) => {
  const [currPriority, setCurrPriority] = useState('low')
  const [cardDatas, setCardDatas] = useState(initialCardState)
  const { setTaskListState } = useContext(TaskContext)

  const closeWithoutSave = () => {
    setCardDatas(initialCardState)
    transformDiv()
  }

  const priorities = [
    { id: 1, name: 'low', color: 'bg-blue-500' },
    { id: 2, name: 'medium', color: 'bg-yellow-500' },
    { id: 3, name: 'high', color: 'bg-red-500' },
  ]

  const pushToList = () => {
    setTaskListState((task) => {
      const newTask = {
        id: (Math.random() * 100).toString(16),
        taskName: cardDatas.taskName,
        taskType: cardDatas.taskType,
        peoples,
        priority: currPriority,
        status: 'wip',
      }

      console.log([...task, newTask])

      return [...task, newTask]
    })
    setCardDatas(initialCardState)
    transformDiv()
  }

  return (
    <div className={toggleTransform ? 'visible' : 'hidden'}>
      <div className='relative'>
        <div className='absolute flex items-center justify-between w-16 -right-2 -top-2'>
          <div onClick={pushToList}>
            <MdDone className='w-6 h-6 text-white bg-green-600 rounded-full cursor-pointer' />
          </div>
          <div onClick={closeWithoutSave}>
            <VscClose className='w-6 h-6 text-white bg-red-600 rounded-full cursor-pointer' />
          </div>
        </div>
        <div className='h-32 bg-white shadow-sm w-60 rounded-3xl'>
          <div className='p-4 space-y-2'>
            <input
              type='text'
              className='w-40 font-bold leading-none transition bg-transparent border-b-2 border-transparent outline-none text-md focus:border-orange-light'
              placeholder='Task name'
              value={cardDatas.taskName}
              onChange={(e) =>
                setCardDatas((cardData) => ({
                  ...cardData,
                  taskName: e.target.value,
                }))
              }
            />
            <input
              type='text'
              className='w-40 mb-2 text-xs font-semibold leading-none transition bg-transparent border-b-2 border-transparent outline-none text-md focus:border-orange-light'
              placeholder='Task type'
              value={cardDatas.taskType}
              onChange={(e) =>
                setCardDatas((cardData) => ({
                  ...cardData,
                  taskType: e.target.value,
                }))
              }
            />
            <div className='flex items-center justify-between mt-2 space-x-1 text-xs text-white'>
              {priorities.map(({ id, name, color }) => (
                <button
                  className={`h-6 px-2 py-1 text-white rounded-full focus:outline-none ${color} ${
                    currPriority === name &&
                    'ring-4 ring-gray-800 ring-offset-transparent'
                  }`}
                  onClick={() => {
                    setCardDatas((cardData) => ({
                      ...cardData,
                      priority: name,
                    }))
                    setCurrPriority(name)
                  }}
                  key={id}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCard
