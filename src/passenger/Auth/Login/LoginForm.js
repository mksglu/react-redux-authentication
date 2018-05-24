import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import validate from './LoginFormValidation'
import TextField from '../../../elements/ReduxFormFields/TextField'
import Label from '../../../elements/Form/Label'
import Button from '../../../elements/Form/Button'

const LoginForm = ({ handleSubmit, isLoginFailed }) => (
  <form onSubmit={e => handleSubmit(e)}>
    <div className="form-group">
      <Label htmlFor="email">E-Mail Address</Label>
      <Field component={TextField} isError={isLoginFailed} name="email" type="text" />
    </div>
    <div className="form-group">
      <Label htmlFor="password">Password</Label>
      <Field component={TextField} isError={isLoginFailed} name="password" type="password" />
    </div>
    <div className="form-group" />
    <div className="form-group no-margin">
      <Button>Login</Button>
    </div>
    <div className="margin-top20 text-center">
      Don`t have an account? <Link to="/auth/register">Create One</Link>
    </div>
  </form>
)

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm)
