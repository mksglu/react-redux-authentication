import {
  GETALL_FAILURE,
  GETALL_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../constants/loginConstants'

const persistedState = localStorage.getItem('authentication')
  ? JSON.parse(localStorage.getItem('authentication'))
  : null

const initialState = persistedState ? { loggedIn: true, ...persistedState } : {}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {}

    case LOGIN_FAILURE:
      return {
        err: action.payload,
      }
    case REGISTER_SUCCESS:
      return { registed: true }
    case REGISTER_FAILURE:
      return {}
    case GETALL_SUCCESS:
      return {
        name: action.payload.name || state.user.name,
        loggedIn: true,
      }
    case GETALL_FAILURE:
      return {}
    case LOGOUT:
      return { loggedIn: false }
    default:
      return state
  }
}
