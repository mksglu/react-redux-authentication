export default (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'email equired'
  }

  if (!values.password) {
    errors.password = 'Pass required'
  }

  return errors
}
