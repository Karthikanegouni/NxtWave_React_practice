import { Component } from "react"
import CryptocurrencyItem from "../CryptocurrencyItem"
import "./index.css"

export default class CryptocurrenciesList extends Component {
  render() {
    const { cryptoDataList } = this.props

    return (
      <div className="cryptocurrency-list-cnt">
        <h1 className="title">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="app-logo"
        />

        <ul className="crypto-items-cnt">
          <li className="table-header">
            <div className="header-left">
              <h1 className="currency-title">Coin Type</h1>
            </div>
            <div className="header-right">
              <h1 className="value">USD</h1>
              <h1 className="value">EURO</h1>
            </div>
          </li>

          {cryptoDataList.map((currencyData) => (
            <CryptocurrencyItem
              key={currencyData.id}
              currencyData={currencyData}
            />
          ))}
        </ul>
      </div>
    )
  }
}
