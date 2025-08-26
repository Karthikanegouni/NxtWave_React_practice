import { Link } from "react-router-dom"
import "./index.css"

const ProductCard = (props) => {
  const { productData } = props
  const { title, brand, imageUrl, rating, price, id } = productData

  return (
    <Link className="link-item" to={`/products/${id}`}>
      <li className="product-item">
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="thumbnail"
        />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
  )
}
export default ProductCard
