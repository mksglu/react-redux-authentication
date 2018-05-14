import axios from 'axios'
import * as types from '../constants/loginConstants'
import { _fetch } from '../utils/fetch'
import history from '../utils/history'

axios.defaults.headers.post['content-type'] = 'application/json'

const ROOT_API = 'http://localhost:8000/api'

const loginRequest = token => async (dispatch) => {
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`

  try {
    const { data } = await _fetch.get(`${ROOT_API}/users`)
    localStorage.setItem('authentication', JSON.stringify({ ...data }))
    dispatch({ type: types.GETALL_SUCCESS, payload: data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${ROOT_API}/user/login`, { email, password })
    localStorage.setItem('authentication', JSON.stringify({ data }))
    dispatch({ type: types.LOGIN_SUCCESS })
    dispatch(loginRequest(data.token))
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
  }
}

export const register = (email, password, name) => async (dispatch) => {
  try {
    await axios.post(`${ROOT_API}/user/register`, { email, password, name })
    dispatch({ type: types.REGISTER_SUCCESS })
    history.push('/auth/login')
  } catch (err) {
    dispatch({ type: types.REGISTER_FAILURE, payload: err.message })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT })
}
