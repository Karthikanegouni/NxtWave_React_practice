import { Component } from "react"
import "./index.css"

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showError: false,
    errorMsg: "",
  }

  onLoginSuccess = (data) => {
    const { history } = this.props
    if (data.jwt_token) {
      history.replace("/")
    }
    this.setState({ username: "", password: "" })
  }

  onLoginFailure = async (response) => {
    const data = await response.json()
    this.setState({
      showError: true,
      errorMsg: data.error_msg || "Username or password is invalid",
    })
  }

  onSubmitForm = async (event) => {
    event.preventDefault()
    const { username, password } = this.state
    const userDetails = {
      username,
      password,
    }

    const url = "https://apis.ccbp.in/login"
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === false) {
      this.onLoginFailure(response)
      return
    }
    const data = await response.json()
    console.log(data)
    this.onLoginSuccess(data)
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  renderPasswordField = () => {
    const { password } = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const { username } = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const { showError, errorMsg } = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>

          {showError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
