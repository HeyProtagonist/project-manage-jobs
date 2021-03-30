import { ADD_TASK, REMOVE_TASK } from './taskTypes'

export const removeTask = () => {
  return {
    type: REMOVE_TASK,
  }
}

export const addTask = () => {
  return {
    type: ADD_TASK,
  }
}
