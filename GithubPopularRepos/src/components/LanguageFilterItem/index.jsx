import "./index.css"

const LanguageFilterItem = (props) => {
  const { filterItem, setFilter, activeTabId } = props
  const { id, language } = filterItem
  const activeClass = activeTabId === id ? "active-tab" : ""
  const setActiveFilter = () => {
    setFilter(id)
  }
  return (
    <li>
      <button
        type="button"
        className={`filter-item ${activeClass}`}
        onClick={setActiveFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
