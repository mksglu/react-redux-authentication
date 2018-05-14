import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Login from '../../components/login'
import Forgot from '../../components/login/forgot'
import Logout from '../../components/login/logout'
import Register from '../../components/login/register'
import '../../style/login/login.css'
import history from '../../utils/history'

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
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/logout" component={Logout} />
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

const mapStateToProps = state => ({
  user: state.authentication,
})

export default connect(mapStateToProps)(LoginContainer)
