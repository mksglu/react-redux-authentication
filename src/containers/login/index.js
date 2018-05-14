import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../actions/loginAction'
import Login from '../../components/login'
import Forgot from '../../components/login/forgot'
import Register from '../../components/login/register'
import '../../style/login/login.css'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    if (this.props.user.loggedIn) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <Switch>
                <Route path="/auth/login" component={Login} />
                <Route
                  path="/auth/logout"
                  render={() => {
                    this.props.actions.logout()
                    localStorage.removeItem('authentication')
                    return (
                      <Redirect
                        to={{ pathname: '/auth/login', state: { from: this.props.location } }}
                      />
                    )
                  }}
                />
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginAction, dispatch),
})
const mapStateToProps = state => ({
  user: state.authentication,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
