import './index.css'

const HistoryItem = props => {
  const {listItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-item">
      <div className="history-info-cnt">
        <p className="time">{timeAccessed}</p>
        <div className="icon-and-info">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="history-text-cnt">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button onClick={deleteItem} type="button" data-testid="delete">
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
