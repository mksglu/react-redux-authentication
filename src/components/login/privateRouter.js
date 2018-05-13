import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authentication } = rest
  console.log(authentication.loggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        (authentication.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  )
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})

export default connect(mapStateToProps)(PrivateRoute)
