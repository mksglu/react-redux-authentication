import React, { Component } from 'react'
import Brand from '../../Brand'
import Footer from '../../Footer'

export default class Forgot extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Forgot Password</h4>
            <form method="POST">
              <div className="form-group">
                <label htmlFor="email">E-Mail Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue
                  required
                  autoFocus
                />
                <div className="form-text text-muted">
                  By clicking "Reset Password" we will send a password reset link
                </div>
              </div>
              <div className="form-group no-margin">
                <button type="submit" className="btn btn-primary btn-block">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
