import { BsSearch } from "react-icons/bs"
import "./index.css"

const FiltersGroup = (props) => {
  const {
    searchInput,
    updateSearchInput,
    changeRating,
    changeCategory,
    getProducts,
    clearFilters,
    categoryOptions,
    ratingsList,
    activeCategoryId,
    activeRatingId,
  } = props

  const handleSearchChange = (event) => {
    updateSearchInput(event.target.value)
  }

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      getProducts()
    }
  }

  const handleCategoryClick = (categoryId) => {
    changeCategory(categoryId) // update state in parent
  }

  const handleRatingClick = (ratingId) => {
    changeRating(ratingId) // update state in parent
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
      />
      <BsSearch className="search-icon" onClick={getProducts} />
    </div>
  )

  const renderCategories = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(({ categoryId, name }) => {
          const isActive = categoryId === activeCategoryId
          const categoryClass = isActive
            ? "category-name category-name--active"
            : "category-name"

          return (
            <li
              key={categoryId}
              className="category-item"
              onClick={() => handleCategoryClick(categoryId)}
            >
              <p className={categoryClass}>{name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderRatings = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(({ ratingId, imageUrl }) => {
          const ratingClass =
            ratingId === activeRatingId
              ? "rating-label rating-label--active"
              : "rating-label"

          return (
            <li
              key={ratingId}
              className="rating-item"
              onClick={() => handleRatingClick(ratingId)}
            >
              <img
                src={imageUrl}
                alt={`rating ${ratingId}`}
                className="rating-img"
              />
              <p className={ratingClass}>& up</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategories()}
      {renderRatings()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
