import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  render() {
    console.log(this.props.authentication)
    return `Hosgeldin: ${this.props.authentication.name}`
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps)(HomePage)
