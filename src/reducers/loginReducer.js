import decode from 'jwt-decode'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/loginConstants'

const user = decode(localStorage.getItem('user'))
console.log(user.username)

export default function authentication(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
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
