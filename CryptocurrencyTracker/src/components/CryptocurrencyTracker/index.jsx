import { Component } from "react"
import { BounceLoader } from "react-spinners"
import CryptocurrencyList from "../CryptocurrenciesList"
import "./index.css"

export default class CryptocurrencyTracker extends Component {
  state = {
    cryptoDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    try {
      const response = await fetch(
        "https://apis.ccbp.in/crypto-currency-converter"
      )
      const data = await response.json()
      const formatedData = data.map((eachItem) => ({
        id: eachItem.id,
        currencyName: eachItem.currency_name,
        currencyLogo: eachItem.currency_logo,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
      }))
      this.setState({
        cryptoDataList: formatedData,
        isLoading: false,
      })
    } catch (error) {
      console.log(`Error while Fetching data: ${error}`)
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading, cryptoDataList } = this.state
    return (
      <div className="cryptocurrency-tracker-cnt">
        {isLoading ? (
          <div data-testid="loader">
            <BounceLoader color="#ffffff" size={100} />
          </div>
        ) : (
          <CryptocurrencyList cryptoDataList={cryptoDataList} />
        )}
      </div>
    )
  }
}
