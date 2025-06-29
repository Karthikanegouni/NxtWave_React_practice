import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  const moneyDetailsList = [
    {
      id: 'balanceAmount',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
      cardTitle: 'Your Balance',
      altImgText: 'balance',
      amount: balance,
      styleClass: 'balance-card',
    },
    {
      id: 'incomeAmount',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
      cardTitle: 'Your Income',
      altImgText: 'income',
      amount: income,
      styleClass: 'income-card',
    },
    {
      id: 'expensesAmount',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
      cardTitle: 'Your Expenses',
      altImgText: 'expenses',
      amount: expenses,
      styleClass: 'expenses-card',
    },
  ]
  return (
    <div className="money-details-cnt">
      {moneyDetailsList.map(item => {
        const {id, imageUrl, cardTitle, altImgText, amount, styleClass} = item
        return (
          <div className={`money-details-card ${styleClass}`} key={id}>
            <img src={imageUrl} alt={altImgText} className="card-logo" />
            <div className="text-cnt">
              <p className="money-details-card-title">{cardTitle}</p>
              <p className="money-details-card-amount" data-testid={id}>
                Rs {amount}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MoneyDetails
