import './index.css'

const Login = props => {
  const {onLogin} = props

  return (
    <button type="button" onClick={onLogin} className="button">
      Login
    </button>
  )
}

export default Login

