import { Component } from "react"
import Cookies from "js-cookie"
import { SyncLoader } from "react-spinners"
import Header from "../Header"
import "./index.css"

class ProductItemDetails extends Component {
  state = {
    productData: {},
    isLoading: false,
    productId: null,
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params
    this.setState({ productId: id }, this.getProductDetails)
  }

  getProductDetails = async () => {
    this.setState({
      isLoading: true,
    })
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
      const updatedData = {
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }
      this.setState({
        productData: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <SyncLoader color="#0b69ff" size={40} />
    </div>
  )

  renderProductDetailsView = (productData) => {
    const { title, brand, price, rating, imageUrl } = productData
    return (
      <div className="Product-Detailed-view">
        <h1>
          Product: {title}
        </h1>
        <img className="product-detailed-img" src={imageUrl} alt={title} />
        <p>{brand}</p>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    )
  }
  render() {
    const { productData, isLoading } = this.state
    return (
      <>
        <Header />
        {isLoading
          ? this.renderLoadingView()
          : this.renderProductDetailsView(productData)}
      </>
    )
  }
}

export default ProductItemDetails
