import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../../../actions/LoginAction'
import Brand from '../../Brand'
import Footer from '../../Footer'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
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
    const { email, password, name } = this.state

    if (email && password && name) {
      this.props.actions.register(email, password, name)
    }
  }
  render() {
    const { email, password, name } = this.state

    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Register</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={this.handleChange}
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail Address</label>
                <input
                  value={email}
                  onChange={this.handleChange}
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={this.handleChange}
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  data-eye
                />
              </div>

              <div className="form-group no-margin">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <div className="margin-top20 text-center">
                Already have an account? <Link to="/auth/login">Login</Link>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))
