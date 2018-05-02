// Core Import

import axios from 'axios'
import decode from 'jwt-decode'
// Constants

import * as types from '../constants/loginConstants'

// Axios Config

axios.defaults.headers.post['content-type'] = 'application/json'

const ROOT_API = 'http://api.yorumsatiri.com'

/* export const login = (usernameOrEmail, password) => async (dispatch, getState) => {
  const url = `${ROOT_API}/login_check`
  const { username } = await axios({
    method: 'post',
    url,
  })
  dispatch({ type: types.LOGIN_SUCCESS, user: username })
} */

export const login = (username, password) => async (dispatch, getState) => {
  const _fetch = (url, options) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(checkStatus)
      .then(response => response.json())
  }

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
  const setToken = (idToken) => {
    localStorage.setItem('user', idToken)
  }
  const getToken = () => localStorage.getItem('user')

  return _fetch(`${ROOT_API}/loginCheck`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    setToken(res.token) // Setting the token in localStorage
    return Promise.resolve(res)
  })
}
