export default (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Username or email equired'
  }

  if (!values.email) {
    errors.email = 'Email required'
  }

  if (!values.password) {
    errors.password = 'Pass required'
  }

  return errors
}
