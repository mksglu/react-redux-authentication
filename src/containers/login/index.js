import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../style/login/login.css'

import Login from '../../components/login'
import Forgot from '../../components/login/forgot'
import Register from '../../components/login/register'

export default class LoginContainer extends Component {
  render() {
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <Switch>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/forgot" component={Forgot} />
                <Route path="/auth/register" component={Register} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
