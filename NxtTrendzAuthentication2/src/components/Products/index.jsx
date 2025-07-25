import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"
import Header from "../Header"
import "./index.css"

const Products = () => {
  const jwtToken = Cookies.get("jwt_token")
  if (!jwtToken) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}

export default Products
