import { withRouter } from "react-router-dom"
import Cookies from "js-cookie"

const LogoutButton = (props) => {
  const onLogout = () => {
    Cookies.remove("jwt_token")
    const { history } = props
    history.replace("/login")
  }

  return (
    <>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
