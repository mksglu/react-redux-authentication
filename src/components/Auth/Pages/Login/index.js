import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../../../actions/LoginAction'
import Brand from '../../Brand'
import Footer from '../../Footer'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameOrEmail: '',
      password: '',
      submitted: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ submitted: true })
    const { usernameOrEmail, password } = this.state

    if (usernameOrEmail && password) {
      this.props.actions.login(usernameOrEmail, password)
    }
  }

  render() {
    const { usernameOrEmail, password } = this.state

    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Login</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username Or E-Mail Address</label>
                <input
                  value={usernameOrEmail}
                  onChange={this.handleChange}
                  id="email"
                  className={
                    this.props.authentication.loginFailed
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name="usernameOrEmail"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={this.handleChange}
                  id="password"
                  className={
                    this.props.authentication.loginFailed
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name="password"
                  required
                  data-eye
                />
              </div>
              <div className="form-group" />
              <div className="form-group no-margin">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
              <div className="margin-top20 text-center">
                Don't have an account? <Link to="/auth/register">Create One</Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginAction, dispatch),
})
const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
