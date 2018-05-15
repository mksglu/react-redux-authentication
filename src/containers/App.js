import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Router, Switch, withRouter } from 'react-router-dom'
import About from '../components/Pages/About'
import HomePage from '../components/Pages/Home'
import PrivateRoute from '../components/login/privateRouter'
import history from '../utils/history'
import Login from './login'

class AppContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/auth/:login" component={Login} />
          <Route path="/about/" component={About} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default withRouter(connect(mapStateToProps)(AppContainer))
