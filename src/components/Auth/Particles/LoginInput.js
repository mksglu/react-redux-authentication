import React, { Component } from 'react'
import { connect } from 'react-redux'
// aslinda buna ihtiyacimiz kalmadi artik ama dursun simdilik
class LoginInput extends Component {
  renderInput = () => (
    <input
      value={this.props.value}
      onChange={() => this.props.onChange(this.props.name, this.props.value)}
      id={this.props.email}
      style={{ backgroundColor: `${this.props.authentication.loginFailed ? 'red' : 'blue'}` }}
      className={this.props.className}
      name={this.props.usernameOrEmail}
    />
  )
  render() {
    return this.renderInput()
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
})

export default connect(mapStateToProps)(LoginInput)
