import { taskList } from '../../Components/Dummys/taskList'
import { ADD_TASK, REMOVE_TASK } from './taskTypes'

const initialState = { ...taskList }

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state }

    case REMOVE_TASK:
      return { ...state }

    default:
      return state
  }
}

export default taskReducer
