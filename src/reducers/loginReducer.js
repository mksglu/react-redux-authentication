import decode from 'jwt-decode'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/loginConstants'
// const user = JSON.parse(localStorage.getItem('user'))
const user = localStorage.getItem('user')

const initialState = user ? { loggedIn: true, user: decode(user.username) } : {}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('initialState', action.user)
      return {
        loggedIn: true,
        user: action.user,
      }
    case LOGIN_FAILURE:
      return {}
    case LOGOUT:
      return {}
    default:
      return state
  }
}
