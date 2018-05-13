import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as LoginAction from '../../actions/loginAction'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.props.x()
  }
  render() {
    return <div>s</div>
  }
}

const mapDispatchToProps = dispatch => ({
  x: () => dispatch(LoginAction.logout()),
})

export default connect(null, mapDispatchToProps)(Logout)
