import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
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

export default withRouter(connect(mapStateToProps)(LoginContainer))
