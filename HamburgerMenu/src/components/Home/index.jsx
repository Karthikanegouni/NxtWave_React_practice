import Header from "../Header"
import "./index.css"

const Home = () => (
  <>
    <Header />
    <div className="page-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="sm-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-img"
      />
    </div>
  </>
)

export default Home
