import React, { Component } from 'react'
import Footer from './footer'
import Brand from './brand'
import { Link } from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <Brand />
        <div className="card fat">
          <div className="card-body">
            <h4 className="card-title">Register</h4>
            <form method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  autofocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail Address</label>
                <input
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
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  data-eye
                />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" name="aggree" defaultValue={1} /> I
                  agree to the Terms and Conditions
                </label>
              </div>
              <div className="form-group no-margin">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <div className="margin-top20 text-center">
                Already have an account? <Link to="/">Login</Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
