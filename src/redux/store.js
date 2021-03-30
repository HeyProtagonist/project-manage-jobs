import { createStore } from 'redux'
import taskReducer from './task/taskReducer'

const store = createStore(taskReducer)

export default store
