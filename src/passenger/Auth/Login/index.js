import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthAction from '../../../applications/actions/AuthAction'

import Brand from '../brand'
import Footer from '../footer'
import LoginForm from './LoginForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (values) => {
    const { email, password } = values
    this.props.actions.login(email, password)
  }

  render() {
    const {
      authentication: { loginFailed },
    } = this.props
    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Login</h4>
            <LoginForm
              isLoginFailed={loginFailed}
              onSubmit={(values) => {
                this.handleSubmit(values)
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch),
})
const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
