import { combineReducers } from 'redux'

import authentication from './loginReducer'

const rootReducer = combineReducers({
  authentication,
})

export default rootReducer
