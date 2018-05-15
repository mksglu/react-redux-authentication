import {
  GETALL_FAILURE,
  GETALL_SUCCESS,
  GET_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../constants/loginConstants'

const initialState = localStorage.getItem('token') ? { loggedIn: true } : {}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
      }
    case LOGIN_FAILURE:
      return {
        err: action.payload,
      }
    case REGISTER_SUCCESS:
      return {
        registed: true,
      }
    case REGISTER_FAILURE:
      return {}
    case GETALL_SUCCESS:
      return {
        ...state,
      }
    case GETALL_FAILURE:
      return {}
    case LOGOUT:
      return {
        loggedIn: false,
      }
    default:
      return state
  }
}
