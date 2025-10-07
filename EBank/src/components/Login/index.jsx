import { useState } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import {
  LoginCard,
  LoginForm,
  LoginImageContainer,
  MainContainer,
} from './styledComponents'

const Login = ({ history }) => {
  const [userId, setUserId] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  const token = Cookies.get('jwt_token')

  const handleLogin = async (event) => {
    event.preventDefault()
    const userPayload = { user_id: userId, pin }
    const loginApi = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userPayload),
    }

    const res = await fetch(loginApi, options)
    if (res.ok) {
      const { jwt_token: jwtToken } = await res.json()
      Cookies.set('jwt_token', jwtToken, { expires: 30 })
      history.replace('/')
      return
    }
    const { error_msg: errorMsg } = await res.json()
    setError(errorMsg)
  }

  const renderLoginForm = () => (
    <LoginForm onSubmit={handleLogin}>
      <h1>Welcome Back!</h1>
      <label htmlFor="userId">User ID</label>
      <input
        type="text"
        id="userId"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value)
        }}
      />
      <label htmlFor="pin">PIN</label>
      <input
        type="password"
        placeholder="Enter PIN"
        id="pin"
        value={pin}
        onChange={(e) => {
          setPin(e.target.value)
        }}
      />

      <button type="submit">Login</button>
      {error.trim() !== '' && <p>{error}</p>}
    </LoginForm>
  )

  const renderLoginPage = () => (
    <MainContainer>
      <LoginCard>
        <LoginImageContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
        </LoginImageContainer>
        {renderLoginForm()}
      </LoginCard>
    </MainContainer>
  )

  return <>{!token ? renderLoginPage() : <Redirect to="/" />}</>
}

export default Login
