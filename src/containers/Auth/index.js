import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Forgot from '../../components/Auth/Pages/Forgot'
import Login from '../../components/Auth/Pages/Login'
import Logout from '../../components/Auth/Pages/Logout'
import Register from '../../components/Auth/Pages/Register'
import '../../style/Auth/Login.css'
import history from '../../utils/HistoryUtils'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    if (this.props.user.loggedIn) {
      history.push('/')
    }
    history.listen((location, action) => {
      console.log(action, location.pathname, location.state)
    })
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
