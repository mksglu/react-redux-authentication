import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Switch, Router, withRouter } from 'react-router-dom'

import * as LoginAction from '../actions/loginAction'

import Login from './login'

import HomePage from '../components/Pages/Home'

import PrivateRoute from '../components/login/privateRouter'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    if (this.props.user.loggedIn) {
      this.props.history.push('/')
    }

    // const { dispatch } = this.props
    this.props.history.listen((location, action) => {
      // dispatch(alertActions.clear())
      console.log('dispatch(alertActions.clear())')
    })
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/auth/:login" exact component={Login} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authentication,
})

export default withRouter(connect(mapStateToProps)(AppContainer))
