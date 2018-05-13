import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  render() {
    return `Hosgeldin: ${this.props.authentication.user.name}`
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps)(HomePage)
