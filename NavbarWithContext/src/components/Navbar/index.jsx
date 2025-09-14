import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./index.css"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Navbar = () => {
  const { Theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  const imageUrl =
    Theme === "light"
      ? "https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
      : "https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"

  useEffect(() => {
    document.documentElement.setAttribute("theme", Theme)
  }, [Theme])

  return (
    <div className="navbar-cnt">
      <Link to="/">
        <img src={imageUrl} alt="Website Logo" />
      </Link>
      <ul className="nav-items-cnt">
        <li className="nav-items">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className="custome-bnt" onClick={toggleTheme}>
        {Theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  )
}

export default Navbar
