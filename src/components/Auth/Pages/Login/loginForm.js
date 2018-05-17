import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import validate from './loginFormValidation'
import TextField from '../../Particles/ReduxFormFields/TextField'
// chrome
// bunu sonra baska dosyaya tasirsin

const LoginForm = ({ handleSubmit, isLoginFailed }) => (
  <form onSubmit={e => handleSubmit(e)}>
    <div className="form-group">
      <label>Username Or E-Mail Address</label>
      <Field component={TextField} isError={isLoginFailed} name="usernameOrEmail" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Field component={TextField} isError={isLoginFailed} name="password" type="password" />
    </div>
    <div className="form-group" />
    <div className="form-group no-margin">
      <button type="submit" className="btn btn-primary btn-block">
        Login
      </button>
    </div>
    <div className="margin-top20 text-center">
      Don't have an account? <Link to="/auth/register">Create One</Link>
    </div>
  </form>
)

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm)
