import axios from 'axios'
import * as types from '../constants/loginConstants'

axios.defaults.headers.post['content-type'] = 'application/json'

const ROOT_API = 'http://localhost:8000/api'

const loginRequest = token => async (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  try {
    const response = await axios.get(`${ROOT_API}/users`)
    localStorage.setItem('authentication', JSON.stringify({ token, user: response.data }))
    dispatch({ type: types.GETALL_SUCCESS })
    console.log('loginRequest')
  } catch (error) {
    console.log(error)
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${ROOT_API}/user/login`, { email, password })
    dispatch({ type: types.LOGIN_SUCCESS })
    dispatch(loginRequest(response.data.token))
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
  }
}
