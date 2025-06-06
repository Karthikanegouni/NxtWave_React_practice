import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prev => {
      return {count: prev.count + 1}
    })
  }

  onDecrease = () => {
    this.setState(prev => {
      return {count: prev.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter APP</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onDecrease}>
            Decrease
          </button>
          <button className="button" onClick={this.onIncrease}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
