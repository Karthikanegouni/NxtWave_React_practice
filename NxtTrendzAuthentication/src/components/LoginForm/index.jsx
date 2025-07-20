import React, { Component } from "react"
import "./index.css"

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-container">
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" placeholder="Username"/>
          </div>

          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    )
  }
}
