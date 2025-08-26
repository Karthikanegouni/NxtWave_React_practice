import { Component } from "react"
import Cookies from "js-cookie"
import { SyncLoader } from "react-spinners"
import { BsPlusSquare, BsDashSquare } from "react-icons/bs"
import Header from "../Header"
import SimilarProductItem from "../SimilarProductItem"
import "./index.css"

const apiStatusConstants = {
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

class ProductItemDetails extends Component {
  state = {
    productData: {},
    apiStatus: null,
    productId: null,
    quantity: 1,
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params
    this.setState({ productId: id }, this.getProductDetails)
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id
    const currentId = this.props.match.params.id

    if (prevId !== currentId) {
      this.setState({ productId: currentId }, this.getProductDetails)
    }
  }

  getProductDetails = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })
    const { productId } = this.state
    const jwtToken = Cookies.get("jwt_token")
    const apiUrl = `https://apis.ccbp.in/products/${productId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const product = await response.json()
      const updatedData = this.formatProduct(product)
      this.setState({
        apiStatus: apiStatusConstants.success,
        productData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  formatSimilarProducts = (similarProducts) =>
    similarProducts.map((product) => ({
      id: product.id,
      imageUrl: product.image_url,
      title: product.title,
      style: product.style,
      price: product.price,
      description: product.description,
      brand: product.brand,
      totalReviews: product.total_reviews,
      rating: product.rating,
      availability: product.availability,
    }))

  formatProduct = (product) => ({
    id: product.id,
    imageUrl: product.image_url,
    title: product.title,
    price: product.price,
    description: product.description,
    brand: product.brand,
    totalReviews: product.total_reviews,
    rating: product.rating,
    availability: product.availability,
    similarProducts: product.similar_products
      ? this.formatSimilarProducts(product.similar_products)
      : [],
  })

  handleMinus = () => {
    this.setState((prev) =>
      prev.quantity > 1 ? { quantity: prev.quantity - 1 } : null
    )
  }

  handlePlus = () => {
    this.setState((prev) => ({
      quantity: prev.quantity + 1,
    }))
  }

  handleContinueShopping = () => {
    const { history } = this.props
    history.replace("/products")
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <SyncLoader color="#0b69ff" size={50} />
    </div>
  )

  renderSimilarProducts = () => {
    const { productData } = this.state
    const { similarProducts = [] } = productData
    return (
      <div className="similar-products-cnt">
        <h1>Similar Products</h1>
        <ul className="similar-products-list">
          {similarProducts.map((product) => (
            <SimilarProductItem key={product.id} productData={product} />
          ))}
        </ul>
      </div>
    )
  }

  renderProductDetailsView = () => {
    const { productData } = this.state
    const {
      title,
      price,
      rating,
      imageUrl,
      description,
      availability,
      brand,
      totalReviews,
    } = productData

    const { quantity } = this.state
    return (
      <div className="Product-Detailed-view">
        <div className="product-detailed-img-cnt">
          <img className="product-detailed-img" src={imageUrl} alt="product" />
        </div>

        <div className="product-detailed-details">
          <h1 className="product-item-title">{title}</h1>
          <p>Rs {price}/-</p>
          <div className="rating_and_reviews">
            <div className="rating-container">
              <p className="rating">{rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
            <p>{totalReviews} Reviews</p>
          </div>
          <p>{description}</p>
          <p>
            <span className="strong-text">Available: </span>
            {availability}
          </p>
          <p>
            <span className="strong-text">Brand: </span>
            {brand}
          </p>
          <hr className="horizontal-line" />
          <div className="plus-minus-quantity-cnt">
            <button
              type="button"
              data-testid="minus"
              className="wrapper-btn"
              onClick={this.handleMinus}
            >
              <BsDashSquare size={25} color="grey" />
            </button>

            <p>{quantity}</p>
            <button
              type="button"
              data-testid="plus"
              className="wrapper-btn"
              onClick={this.handlePlus}
            >
              <BsPlusSquare size={25} color="grey" />
            </button>
          </div>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    )
  }

  renderErrorView = () => (
    <div className="product-detailed-item-error-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <h1>Product Not Found</h1>
      <button
        className="custom-btn"
        type="button"
        onClick={this.handleContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  )

  renderProductItemDetailed = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      case apiStatusConstants.success:
        return (
          <>
            {this.renderProductDetailsView()}
            {this.renderSimilarProducts()}
          </>
        )
      case apiStatusConstants.failure:
        return this.renderErrorView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderProductItemDetailed()}
      </>
    )
  }
}

export default ProductItemDetails
