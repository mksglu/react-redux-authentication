import React, { Component } from 'react'
import { Route, Router, Switch, withRouter } from 'react-router-dom'
import HomePage from '../components/Pages/Home'
import PrivateRoute from '../components/login/privateRouter'
import Login from './login'

class AppContainer extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/auth/:login" component={Login} />
          <Route path="/selam/" component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default withRouter(AppContainer)
