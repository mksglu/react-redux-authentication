import { combineReducers } from 'redux'
import authentication from './LoginReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  authentication,
  form: formReducer,
})

export default rootReducer
