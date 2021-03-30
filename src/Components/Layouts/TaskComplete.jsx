import React from 'react'
import DropDown from '../Chunks/DropDown'
import { Line } from 'react-chartjs-2'

const outOfTens = [
  { id: 1, taskId: 4, progress: 40 },
  { id: 2, taskId: 5, progress: 50 },
  { id: 3, taskId: 6, progress: 60 },
  { id: 4, taskId: 7, progress: 70 },
  { id: 5, taskId: 8, progress: 80 },
  { id: 6, taskId: 9, progress: 90 },
]

const TaskComplete = () => {
  const data = {
    labels: [4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: 'Monthly',
        data: [40, 50, 60, 70, 80, 90],
        fill: true,
        backgroundColor: 'rgba(231, 111, 81, 0.2)',
        borderColor: '#e76f51',
        pointBackgroundColor: '#e76f51',
        pointBorderColor: '#e76f51',
      },
    ],
  }

  return (
    <div className='h-auto px-6 py-4 bg-gray-200 rounded-3xl'>
      <h1 className='font-bold'>Task Complete</h1>

      <div className='flex items-center mt-4 mb-10 justify-evenly'>
        {outOfTens.map(({ id, taskId, progress }) => (
          <div key={id}>
            <div className='flex flex-col justify-end w-4 h-32 overflow-hidden bg-white rounded-full'>
              <div
                className='rotate-180 bg-gray-800 rounded-full shadow-lg w-4transform'
                style={{ height: `${progress}%` }}
              ></div>
            </div>
            <p className='my-2 text-center'>{taskId}</p>
          </div>
        ))}
      </div>

      <h1 className='font-bold'>Your Performance</h1>
      <DropDown />

      <div className='flex items-center w-full my-10 bg-gray-100 rounded-md shadow-md h-44 justify-evenly'>
        <Line data={data} />
      </div>

      <div className='flex items-center justify-between my-8'>
        <p className='font-semibold text-2xs'>123 Task Complete</p>
        <p className='font-semibold text-2xs'>123 Task Not Completed</p>
      </div>
    </div>
  )
}

export default TaskComplete
