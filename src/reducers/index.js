import { combineReducers } from 'redux'
import authentication from './LoginReducer'

const rootReducer = combineReducers({
  authentication,
})

export default rootReducer
