import decode from 'jwt-decode'

const authHeader = () => {
  const user = localStorage.getItem('user')

  if (user && decode(user.userId) && decode(user.username)) {
    return { Authorization: `Bearer ${user.token}` }
  }
  return {}
}

export default authHeader
