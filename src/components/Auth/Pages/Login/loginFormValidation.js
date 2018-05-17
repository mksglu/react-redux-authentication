export default (values) => {
  const errors = {}

  if (!values.usernameOrEmail) {
    errors.usernameOrEmail = 'Username or email equired'
  }

  if (!values.password) {
    errors.password = 'Pass required'
  }

  return errors
}
