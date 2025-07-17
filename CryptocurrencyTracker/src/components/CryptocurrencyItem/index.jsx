import "./index.css"

export default function CryptocurrencyItem({ currencyData }) {
  const { currencyName, currencyLogo, usdValue, euroValue } = currencyData

  return (
    <li className="cryptocurrency-item-cnt">
      <div className="currency-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}
