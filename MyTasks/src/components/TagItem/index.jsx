import './index.css'

const TagItem = ({ tagData, activeTabId, onTagClick }) => {
  const { optionId, displayText } = tagData
  const activeTabClass = activeTabId === optionId ? 'active-tag' : ''
  return (
    <li>
      <button
        type="button"
        className={`tag-item ${activeTabClass}`}
        onClick={() => {
          onTagClick(optionId)
        }}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
