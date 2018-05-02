import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  render() {
    console.log(this.props.user)
    return `Hosgeldin: ${this.props.user.authentication.user}`
  }
}

const mapStateToProps = state => ({
  user: state,
})
export default connect(mapStateToProps)(HomePage)
