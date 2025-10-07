import Cookies from 'js-cookie'
import { Redirect, Link } from 'react-router-dom'
import { HeaderContainer, HomeContainer } from './styledComponents'

const Home = ({ history }) => {
  const token = Cookies.get('jwt_token')

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const renderHeader = () => (
    <HeaderContainer>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
      </Link>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </HeaderContainer>
  )

  const renderHomeView = () => (
    <HomeContainer>
      {renderHeader()}
      <h1>Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeContainer>
  )

  return <div>{!token ? <Redirect to="/ebank/login" /> : renderHomeView()}</div>
}

export default Home
