import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthAction from '../../../applications/actions/AuthAction'

class Logout extends Component {
  componentDidMount() {
    this.props.actions.logout()
  }
  render() {
    return <h1 className="loading-text">Logging out...</h1>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch),
})

export default connect(null, mapDispatchToProps)(Logout)
