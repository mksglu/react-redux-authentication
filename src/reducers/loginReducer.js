import {
  GETALL_FAILURE,
  GETALL_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../constants/loginConstants'

const persistedState = localStorage.getItem('authentication')
  ? JSON.parse(localStorage.getItem('authentication'))
  : false

const initialState = persistedState ? { loggedIn: true, ...persistedState } : {}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {}

    case LOGIN_FAILURE:
      return {
        err: action.payload,
      }
    case GETALL_SUCCESS:
      return { loggedIn: true }
    case GETALL_FAILURE:
      return {}
    case LOGOUT:
      return {}
    default:
      return state
  }
}
