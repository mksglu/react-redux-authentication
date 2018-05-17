import * as types from '../constants/LoginConstants'
import API from '../utils/FetchUtils'
import history from '../utils/HistoryUtils'

export const getUser = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('authentication'))
  dispatch({ type: types.GET_USER, payload: user })
}

const loginRequest = (userId, token) => async (dispatch) => {
  try {
    const response = await API.get(`/Users/${userId}`, {
      params: {
        access_token: token,
      },
    })
    localStorage.setItem(
      'authentication',
      JSON.stringify({ id: response.data.id, name: response.data.username }),
    )
    dispatch({ type: types.GETALL_SUCCESS })
    history.push('/')
  } catch (err) {
    if (err.response.status === 400) {
      window.location.reload()
    }
    dispatch({ type: types.GETALL_FAILURE, payload: err.message })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await API.post('Users/login', { email, password })
    localStorage.setItem('token', data.id)
    dispatch({ type: types.LOGIN_SUCCESS, payload: data })
    dispatch(loginRequest(data.userId, data.id))
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
  }
}

export const register = (email, password, username) => async (dispatch) => {
  try {
    await API.post('Users', { email, password, username })
    dispatch({ type: types.REGISTER_SUCCESS })
    history.push('/auth/login')
  } catch (err) {
    dispatch({ type: types.REGISTER_FAILURE, payload: err.message })
  }
}

export const logout = () => async (dispatch) => {
  try {
    await API.post('Users/logout')
    localStorage.removeItem('authentication')
    localStorage.removeItem('token')
    dispatch({ type: types.LOGOUT })
    history.push('/auth/login')
  } catch (err) {
    if (err.response.status === 401) {
      history.push('/auth/login')
    }
    console.log(err)
  }
}
