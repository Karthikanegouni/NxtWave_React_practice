import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"
import "./index.css"

const Login = (props) => {
  const jwtToken = Cookies.get("jwt_token")
  if (jwtToken) {
    return <Redirect to="/" />
  }

  const onLogin = async () => {
    const userData = {
      username: "rahul",
      password: "rahul@2021",
    }

    const api = "https://apis.ccbp.in/login"
    const option = {
      method: "POST",
      body: JSON.stringify(userData),
    }

    const response = await fetch(api, option)
    if (response.ok) {
      const data = await response.json()
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 })
      const { history } = props
      history.replace("/")
    } else {
      console.log(response)
    }
  }

  return (
    <div className="login">
      <h1>Please Login</h1>
      <button type="button" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
