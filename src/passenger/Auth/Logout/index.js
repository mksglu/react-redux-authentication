import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../../applications/actions/LoginAction'

class Logout extends Component {
  componentDidMount() {
    this.props.actions.logout()
  }
  render() {
    return <h1 className="loading-text">Logging out...</h1>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginAction, dispatch),
})

export default connect(null, mapDispatchToProps)(Logout)
