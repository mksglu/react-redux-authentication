import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Router, Switch, withRouter } from 'react-router-dom'
import AuthContainer from './AuthContainer'
import PrivateRoute from '../applications/router/PrivateRouter'
import Passenger from '../passenger/Layouts'
import history from '../helpers/history'
import HELPER_URL from '../helpers/url'

class AppContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Passenger.Home} />
          <Route path={`${HELPER_URL.PREFIXES.AUTH}/:auth`} component={AuthContainer} />
          <Route path={HELPER_URL.URLS.ABOUT} component={Passenger.About} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default withRouter(connect(mapStateToProps)(AppContainer))
