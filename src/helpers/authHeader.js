const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` }
  }
  return {}
}

export default authHeader
