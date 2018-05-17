import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authentication from './AuthReducer'

const rootReducer = combineReducers({
  authentication,
  form: formReducer,
})

export default rootReducer
