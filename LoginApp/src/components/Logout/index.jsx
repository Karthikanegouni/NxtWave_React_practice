import './index.css'

const Logout = props => {
  const {onLogout} = props

  return (
    <button type="button" onClick={onLogout} className="button">
      Logout
    </button>
  )
}

export default Logout

