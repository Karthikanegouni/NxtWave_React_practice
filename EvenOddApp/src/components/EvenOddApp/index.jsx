import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 101) // 0 to 100
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <p className="status">{isEven ? 'Count is Even' : 'Count is Odd'}</p>
        <button type="button" onClick={this.onIncrement} className="button">
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
