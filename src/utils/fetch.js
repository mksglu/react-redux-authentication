import axios from 'axios'

export default () => {
  const persistedState = localStorage.getItem('authentication')
    ? JSON.parse(localStorage.getItem('authentication'))
    : null
  return axios.create({
    headers: {
      Authorization: `Bearer ${persistedState.token}`, // eslint-disable-line no-undef
    },
  })
}
