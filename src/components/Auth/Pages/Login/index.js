import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../../../actions/LoginAction'
import Brand from '../../Brand'
import Footer from '../../Footer'
import LoginInput from '../../Particles/LoginInput'
import LoginForm from './loginForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameOrEmail: '',
      password: '',
      submitted: false,
    }
  }

  handleChange = (name, value) => {
    console.log(name, value)
    this.setState({ [name]: value })
  }
  handleSubmit = (values) => {
    const { usernameOrEmail, password } = values
    this.props.actions.login(usernameOrEmail, password) // run
  }

  render() {
    const { usernameOrEmail, password } = this.state
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
              }} // simdi evet dene
            />
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
