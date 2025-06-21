import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
