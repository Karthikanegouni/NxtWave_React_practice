import { Link } from "react-router-dom"
import "./index.css"

export default function Header() {
  return (
    <nav className="header-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="nav-items">
        <Link to="/" className="link">
          <p>Home</p>
        </Link>
        <Link to="/products" className="link">
          <p>Product</p>
        </Link>
        <Link to="/cart" className="link">
          <p>Cart</p>
        </Link>
        <button type="button">Logout</button>
      </div>
    </nav>
  )
}
