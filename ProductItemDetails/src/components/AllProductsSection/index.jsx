import { Component } from "react"
import { SyncLoader } from "react-spinners"
import Cookies from "js-cookie"
import FiltersGroup from "../FiltersGroup"
import ProductCard from "../ProductCard"
import ProductsHeader from "../ProductsHeader"
import "./index.css"

const categoryOptions = [
  { name: "Clothing", categoryId: "1" },
  { name: "Electronics", categoryId: "2" },
  { name: "Appliances", categoryId: "3" },
  { name: "Grocery", categoryId: "4" },
  { name: "Toys", categoryId: "5" },
]

const sortbyOptions = [
  { optionId: "PRICE_HIGH", displayText: "Price (High-Low)" },
  { optionId: "PRICE_LOW", displayText: "Price (Low-High)" },
]

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
]

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
}

class AllProductsSection extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: "",
    searchInput: "",
    activeRatingId: "",
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })

    const jwtToken = Cookies.get("jwt_token")
    const { activeOptionId, activeCategoryId, searchInput, activeRatingId } =
      this.state

    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
    console.log("Fetching URL:", apiUrl)

    const options = {
      headers: { Authorization: `Bearer ${jwtToken}` },
      method: "GET",
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  changeSortby = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getProducts)
  }

  updateSearchInput = (searchValue) => {
    this.setState({ searchInput: searchValue })
  }

  changeCategory = (activeCategoryId) => {
    this.setState({ activeCategoryId }, this.getProducts)
  }

  changeRating = (activeRatingId) => {
    this.setState({ activeRatingId }, this.getProducts)
  }

  clearFilters = () => {
    this.setState(
      { searchInput: "", activeCategoryId: "", activeRatingId: "" },
      this.getProducts
    )
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductNotFound = () => (
    <div className="no-products-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        alt="no products"
        className="no-products-img"
      />
      <h1 className="no-products-heading">No Products Found</h1>
      <p className="no-products-description">
        We could not find any products. Try other filters.
      </p>
    </div>
  )

  renderProductsListView = () => {
    const { productsList, activeOptionId } = this.state
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.length === 0
            ? this.renderProductNotFound()
            : productsList.map((product) => (
                <ProductCard productData={product} key={product.id} />
              ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <SyncLoader color="#0b69ff" size={15} />
    </div>
  )

  renderAllProducts = () => {
    const { apiStatus } = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const { searchInput, activeCategoryId, activeRatingId } = this.state
    return (
      <div className="all-products-section">
        <FiltersGroup
          searchInput={searchInput}
          updateSearchInput={this.updateSearchInput}
          getProducts={this.getProducts}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          changeCategory={this.changeCategory}
          changeRating={this.changeRating}
          activeCategoryId={activeCategoryId}
          activeRatingId={activeRatingId}
          clearFilters={this.clearFilters}
        />
        {this.renderAllProducts()}
      </div>
    )
  }
}

export default AllProductsSection
