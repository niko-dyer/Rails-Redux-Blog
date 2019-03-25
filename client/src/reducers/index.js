import { combineReducers } from 'redux'
import blogs from './blogs'
import nextId from './nextId'

const rootReducer = combineReducers({
    blogs,
    nextId,
})

export default rootReducer