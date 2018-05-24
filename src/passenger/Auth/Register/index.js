import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginAction from '../../../applications/actions/LoginAction'

import Brand from '../brand'
import Footer from '../footer'
import RegisterForm from './RegisterForm'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
    }
  }
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (values) => {
    const { email, password, name } = values
    this.props.actions.register(email, password, name)
  }

  render() {
    const {
      authentication: { registerFailed },
    } = this.props
    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Register</h4>
            <RegisterForm
              isRegisterFailed={registerFailed}
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
  actions: bindActionCreators(LoginAction, dispatch),
})
const mapStateToProps = state => ({
  authentication: state.authentication,
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)
