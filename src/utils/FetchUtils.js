import axios from 'axios'

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production' ? 'http://0.0.0.0:3000/api/' : 'http://0.0.0.0:3000/api/',
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
    'content-type': 'application/json',
  },
})
