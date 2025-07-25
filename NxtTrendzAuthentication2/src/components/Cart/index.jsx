import Header from "../Header"
import { Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

const Cart = () => {
  const jwtToken = Cookies.get("jwt_token")
  if (!jwtToken) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  )
}

export default Cart
