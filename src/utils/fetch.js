import axios from 'axios'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : '',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'content-type': 'application/json',
  },
})
