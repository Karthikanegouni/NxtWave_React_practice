import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransactionItem} = props
  const {id, title, amount, type} = transaction

  const onDeleteItem = () => {
    deleteTransactionItem(id)
  }
  return (
    <li className="history-item">
      <p className="item-text-cnt">{title}</p>
      <p className="item-text-cnt">Rs {amount}</p>
      <p className="item-text-cnt">{type}</p>
      <button
        type="button"
        className="delete-btn del-icon-cnt"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
