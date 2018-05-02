// Core Import

import axios from 'axios'
import qs from 'qs'

// Helpers

import { authHeader } from '../helpers'

// Axios Config

axios.defaults.headers.post['content-type'] = 'application/json'

export const userService = {
  login,
  logout,
}

export const login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }

  return fetch('/users/authenticate', requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText)
      }

      return response.json()
    })
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })
}
