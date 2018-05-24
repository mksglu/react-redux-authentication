import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Passenger from '../passenger/Auth'
import history from '../helpers/history'
import HELPER_URL from '../helpers/url'

import '../assets/style/auth.css'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    if (this.props.user.loggedIn) {
      history.push('/')
    }
  }
  render() {
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <Switch>
                <Route path={HELPER_URL.URLS.LOGIN} component={Passenger.Login} />
                <Route path={HELPER_URL.URLS.LOGOUT} component={Passenger.Logout} />
                <Route path={HELPER_URL.URLS.REGISTER} component={Passenger.Register} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authentication,
})

export default connect(mapStateToProps)(LoginContainer)
