import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import validate from './RegisterFormValidation'
import TextField from '../../../elements/ReduxFormFields/TextField'
import Label from '../../../elements/Form/Label'
import Button from '../../../elements/Form/Button'

const RegisterForm = ({ handleSubmit, isRegisterFailed }) => (
  <form onSubmit={e => handleSubmit(e)}>
    <div className="form-group">
      <Label htmlFor="name">First Name</Label>
      <Field component={TextField} isError={isRegisterFailed} name="name" type="text" />
    </div>
    <div className="form-group">
      <Label htmlFor="email">E-Mail Address</Label>
      <Field component={TextField} isError={isRegisterFailed} name="email" type="text" />
    </div>
    <div className="form-group">
      <Label htmlFor="password">Password</Label>
      <Field component={TextField} isError={isRegisterFailed} name="password" type="password" />
    </div>
    <div className="form-group no-margin">
      <Button>Register</Button>
    </div>
    <div className="margin-top20 text-center">
      Already have an account? <Link to="/auth/login">Login</Link>
    </div>
  </form>
)

export default reduxForm({
  form: 'register',
  validate,
})(RegisterForm)
